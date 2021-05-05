/*
    The header holds the page title and logo
*/

import React from 'react';
import '../styles/App.css';
import Logo from './logo.png';

export function Header() {
    return (
        <img src={Logo} alt="Logo" />
    );
};