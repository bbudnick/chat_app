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
            <button onClick={props.multiJoin} >Multi Join</button>
            <NewChatRoomForm createRoom={props.createRoom} />
        </div>

    );
};

export default NavBar;
