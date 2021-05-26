/*
    CurChatRoom is the current chat room with the title and 
    chat history. 
*/

import React from 'react';
import '../styles/App.css';

export function CurChatRoom(props) {

    return (
        <div className="curchatroom">
            <h2>{props.currentRoom.title}</h2>
            <h3>{props.currentUser}</h3>
            <ul className="chat">
            {props.currentRoom.chat.map( (item) => { 
                        return <li key={Math.random()}>
                            {item.user}:  {item.message}
                        </li>
                        }
                    )
                }
            </ul>
        </div>
    );
};
