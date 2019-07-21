import React from 'react';
import Header from '../components/Header';
import Button from '../components/Link';
import { Link } from 'react-router-dom';

export default function Unmatched() {
    return (
        <div>
            <Header title={"Oops,page not found!"}>
            </Header>
            <Link to="/">
                <Button label={"Return to search"}/>
            </Link>
        </div>
    )
}