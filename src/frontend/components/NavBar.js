/*
    The navbar assists in navigating through pages in the site
*/

import React, { useState } from 'react';
import { LeaveChatRoom } from './LeaveChatRoom'
import { NewChatRoomForm } from './NewChatRoomForm';

export function NavBar(props) {
    return (
        <div className="navbar">
            <a href="#" className="active"><NewChatRoomForm /> </a>
            {/* <a href="#" className="active"><DeleteChatRoomForm chatrooms={props}/></a>
            <a href="#" className="right">Join <JoinChatRoom /> </a>
            <a href="#" className="right">Leave <LeaveChatRoom /> </a> */}
        </div>

    );
};
