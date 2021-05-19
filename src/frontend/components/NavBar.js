/*
    The navbar assists in navigating through pages in the site
*/

import React from 'react';
import { NewChatRoomForm } from './NewChatRoomForm';


export function NavBar() {

    return (
        <div className="navbar">
            <a href="#" className="active"><NewChatRoomForm/></a>
            <a href="#" className="right">Link</a>
        </div>

    );
};
