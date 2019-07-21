import React from 'react';
import './style.css';

export default function Search(props) {
    return (
        <input 
            type="search" 
            name={props.name} 
            onChange={props.onChange}
            placeholder={props.placeholder} 
            className="animated-search-form"/>
    );
}