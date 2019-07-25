import React from 'react';
import './style.css';

export default function Search(props) {
    return (
        <div>
            <h1> Open Sesame</h1>

            <input
                type="search"
                name={props.name}
                onChange={props.onChange}
                placeholder={props.placeholder}
                className="animated-search-form" />
        </div>
    );
}