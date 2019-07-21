import React from 'react';
import { Thumbnail, Grid, Cell, Button, Sizes } from 'react-foundation';
import './style.css';

export default function Card({
    title,
    authors,
    image,
    description,
    link,
    btnType,
    handler,
    id
}) {
    return (
        <div className="book-cell">
            <Grid className="book-details">
                <Cell small={12} large={3}>
                    <Thumbnail src={image} alt={title} className="thumbnail"/>
                </Cell>
                <Cell small={12} large={9}>
                    <div className="book-text">
                        <p><span className="book-label">Title: </span>{title}</p>
                        <p><span className="book-label">Author(s): </span>{authors}</p>
                        <p><span className="book-label">Summary: </span>{description}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer">{"View on Google Books"}</a> <br/>
                        <Button className="button-action" size={Sizes.SMALL} onClick={handler} id={id}>{btnType}</Button>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}