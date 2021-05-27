/*
    The navbar assists in navigating through pages in the site
*/

import React from 'react';
import { NewChatRoomForm } from './NewChatRoomForm';
import { SetUserForm } from './SetUserForm';

export function NavBar(props) {
    return (
        <div className="navbar">
            <SetUserForm handleSetUser={props.handleSetUser} />
            <NewChatRoomForm createRoom={props.createRoom} />
        </div>

    );
};
