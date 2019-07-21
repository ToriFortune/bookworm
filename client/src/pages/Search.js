import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Submit from '../components/Submit';
import Card from '../components/Card';
import { Grid, Cell } from 'react-foundation';
import { Link } from 'react-router-dom';
import Button from '../components/Link';
import Prompt from '../components/Prompt';
import API from '../utils/API';
import './style.css';

class Search extends Component {
    state = {
        keywords: '',
        author: '',
        bookList: [],
        termSearched: true,
        updateBook: false,
        savedBookTitle: ''
    }

    searchBooksByKeyword = () => {
        API.searchbyKeywords(this.state.keywords)
           .then(res => {
               console.log(res.data.items)
            this.setState({ bookList: res.data.items })
           })
           .catch(error => console.log(error));
    }

    searchBooksByKeywordAndAuthor = () => {
        API.searchbyKeywordsAndAuthor(
            this.state.keywords,
            this.state.author
        ).then(res => this.setState({ bookList: res.data.items }))
         .catch(error => console.log(error));
    }

    handleInputChange = event => {
        let { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (!this.state.keywords) {
            this.setState({ termSearched: false })
        } else if (!this.state.author) {
            this.searchBooksByKeyword();
        } else {
            this.searchBooksByKeywordAndAuthor();
        }
        
    }

    saveBookToDB = data => {
        API.addBook(data)
           .then(res => {
              this.setState({ savedBookTitle: res.data.title });
              this.notify();
           })
           .catch(error => console.log(error));
    }

    removeNotification = () => {
        this.setState({ updateBook: false });
    }

    notify = () => {
        API.notifyUser(() => {
            this.setState({ updateBook: true }); 
        })
        setTimeout(this.removeNotification, 3000);        
    }

    render() {
        return (
            <div>
                <Header title="Google Books Search"/>
                {/* Link to Favorites */}
                <Link to="/books">
                    <Button label={"Go to favorites"}/>
                </Link>  
                <div className="search-container">
                    <Grid className="display">
                        <h2 className="sub-title">Search & Save Books</h2>
                    </Grid>
                    {/* Form to search books */}
                    <Grid className="display search-form">
                        <form>
                            <Search 
                            name="keywords"
                            value={this.state.keywords}
                            onChange={this.handleInputChange}
                            placeholder={this.state.termSearched 
                                ? "Search by keywords..." 
                                : "Keyword Required"}/>
                            <Search 
                            placeholder="Filter by author..."
                            name="author"
                            value={this.state.author}
                            onChange={this.handleInputChange}/>
                            <Submit label="Submit" onClick={this.handleSubmit}/>
                        </form>               
                    </Grid>   
                    {this.state.updateBook 
                        ? <Prompt heading="Book saved" message={`"${this.state.savedBookTitle}" has been added to favorites.`}/>
                        : null}   
                    {/* List of book results */}
                    <Grid>
                        {this.state.bookList.map(book => {
                            let result = {
                                title: book.volumeInfo.title,
                                authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ').toString() : 'Author unavailable.',
                                image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '../images/default.png',
                                description: book.searchInfo ? book.searchInfo.textSnippet : 'No description available.',
                                link: book.volumeInfo.previewLink
                            }
                            return (
                                <Grid className="display2" key={book.id}>
                                    <Cell small={10} large={10} >
                                        <Card
                                        title={result.title} authors={result.authors}
                                        image={result.image} description={result.description}
                                        link={result.link} btnType="Save"
                                        handler={() => this.saveBookToDB(result)}/>
                                    </Cell>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Search;