/*
    The navbar assists in navigating through pages in the site
*/

import React, { useState } from 'react';
import { NewChatRoomForm } from './NewChatRoomForm';

export function NavBar(props) {
    return (
        <div className="navbar">
            <a href="#" className="active"><NewChatRoomForm /> </a>
        </div>

    );
};
