/*
    The navbar assists in navigating through pages in the site
*/

import React from 'react';
import { NewChatRoomForm } from './NewChatRoomForm';
import { DeleteChatRoomForm } from './DeleteChatRoomForm'


export function NavBar(props) {

    return (
        <div className="navbar">
            <a href="#" className="active"><NewChatRoomForm chatrooms={props}/></a>
            <a href="#" className="active"><DeleteChatRoomForm chatrooms={props}/></a>
            <a href="#" className="right">Link</a>
            <a href="#" className="right">Link</a>
        </div>

    );
};
