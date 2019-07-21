import React from 'react';
import './style.css';

export default function Header(props) {
    return (
        <div className="marketing-site-hero">
            <div className="marketing-site-hero-content">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}