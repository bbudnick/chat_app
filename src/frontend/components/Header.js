/*
    The header holds the page title and logo
*/

import React, { useState } from 'react';
import logo from '../styles/logo.png';

export function Header(props) {
    const [username, setUserName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Great! Your chat user name is ${username}`);
        return username; 
    }
    return (
        <div className="header">
            <h1>Welcome to FelixChat</h1>
            <img className="header-avatar" src={logo} alt="Felix the cat"></img>
            <form onSubmit={handleSubmit}>
            <label>
            Please declare your username:
                        <input
                    type="text"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
};
