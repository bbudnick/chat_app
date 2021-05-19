/*
    The navbar assists in navigating through pages in the site
*/

import React from 'react';
import { NewChatRoomForm } from './NewChatRoomForm';
import { DeleteChatRoomForm } from './DeleteChatRoomForm'
import { JoinChatRoom } from './JoinChatRoom'
import { LeaveChatRoom } from './LeaveChatRoom'

export function NavBar(props) {

    return (
        <div className="navbar">
            <a href="#" className="active"><NewChatRoomForm chatrooms={props}/></a>
            <a href="#" className="active"><DeleteChatRoomForm chatrooms={props}/></a>
            <a href="#" className="right">Join <JoinChatRoom /> </a>
            <a href="#" className="right">Leave <LeaveChatRoom /> </a>
        </div>

    );
};
