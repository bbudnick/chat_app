/*
    The navbar assists in navigating through pages in the site
*/

import React from 'react';

export function NavBar(props) {
    const join = () => {
        console.log(`NavBar: join`);
    }

    return (
        <div className="navbar">
            <a href="#" className="active">Home</a>
            <a href="#">Create</a>
            <a href="#">Join</a>
            <a href="#">Leave</a>
            <a href="#" className="right">Delete</a>
        </div>

    );
};
