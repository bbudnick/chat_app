/*
    CurChatRoom is the current chat room with the title and 
    chat history. 
    CurChatRoom is the parent of MessageBox. 
*/

import React from 'react';
import '../styles/App.css';
import { MessageBox } from './MessageBox';

export function CurChatRoom(props) {
    console.log(`chatRoom: ${JSON.stringify(props.currentRoom)}`);
    let title = '';
    let chat = [];
    if (props.currentRoom !== undefined) {
        title = props.currentRoom.map((item, i) => { return { key: i }, item.title; });
        chat = props.currentRoom.map((item, i) => { return { key: i }, item.chat; });
    } else {
        title = "Title not yet defined";
    }

    return (
        <div className="curchatroom">
            <h2>{title}</h2>
            <ul className="chat">
                {chat.map((item, i) => {
                    return <li key={i}>
                        user:{item.user} message:{item.message} 
                    </li>
                })}
            </ul>
            <MessageBox currentRoom={props.currentRoom} />
        </div>
    );
};
