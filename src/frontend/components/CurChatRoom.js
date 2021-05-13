/*
    CurChatRoom is the current chat room with the title and 
    chat history. It recieves messages from the MessageBox component. 
*/

import React from 'react';
import '../styles/App.css';

export function CurChatRoom() {
    return (
        <div className="row">
            <div className="side">
                <h2>Chat Rooms</h2>
            </div>
            <div className="main">
                <h2>Current Chat Room</h2>
            </div>
        </div>
    );
};
