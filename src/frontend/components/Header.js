/*
    The header holds the page title and logo
*/

import React from 'react';
import logo from '../styles/logo.png';

const Header = () => {

    return (
        <div className="header">
            <h1>Welcome to FelixChat</h1>
            <img className="header-avatar" src={logo} alt="Felix the cat"></img>
        </div>
    );
};

export default Header;
