/*
    The header holds the page title and logo
*/

import React, { useState } from 'react';
import logo from '../styles/logo.png';

const Header = ({ userUpdate }) => {
    const [userName, setUserName] = useState("");

    return (
        <div className="header">
            <h1>Welcome to FelixChat</h1>
            <img className="header-avatar" src={logo} alt="Felix the cat"></img>
            <form onSubmit={() => userUpdate(userName)}>
                <label>
                    Please declare your username:
                <input
                        placeholder="username"
                        required="required"
                        type="text"
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                    />
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Header;
