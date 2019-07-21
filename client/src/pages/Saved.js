import React, { Component } from 'react';
import { Grid, Cell } from 'react-foundation';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Link';
import API from '../utils/API';
import './style.css';

class Saved extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getBooks()
           .then(res => this.setState({ savedBooks: res.data }))
           .catch(error => console.log(error));
    }

    deleteBook = id => {
        API.deleteBook(id)
           .then(res => {
               console.log(res);
               this.getSavedBooks();
           })
           .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Header title={"Favorites"}/>
                <Link to="/">
                    <Button label={"Back to Search"}/>
                </Link>
                    {this.state.savedBooks.map(book => {
                        return (
                            <Grid className="display" key={book._id}>
                                <Cell small={10} large={10} >
                                    <Card
                                    id={book._id}
                                    title={book.title}
                                    authors={book.authors}
                                    image={book.image}
                                    description={book.description}
                                    link={book.link}
                                    btnType={"Remove"}
                                    handler={() => this.deleteBook(book._id)}>
                                    </Card>
                                </Cell>
                            </Grid>
                        )
                    })}
            </div>
        )
    }
}

export default Saved;