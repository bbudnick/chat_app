/*
    The navbar assists in navigating through pages in the site
*/

import React from 'react';
import NewChatRoomForm from './NewChatRoomForm';
import SetUserForm from './SetUserForm';

let NavBar = (props) => {
    return (
        <div className="navbar">
            <SetUserForm setUser={props.setUser} />
            <NewChatRoomForm createRoom={props.createRoom} />
        </div>

    );
};

export default NavBar;
