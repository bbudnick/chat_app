/*
    CurChatRoom is the current chat room with the title and 
    chat history. It recieves messages from the MessageBox component. 
*/

import React from 'react';
import '../styles/App.css';

export function CurChatRoom(props) {

    if(props.state.loading) { 
        console.log(`CurChatRoom: loading...`);
        return (
            <div>
                <h1>Chatroom Loading...</h1>
            </div>
        );
    }

    console.log(`CurChatRoom: currentRoom=${JSON.stringify(props.state.currentRoom)}`);
    console.log(`CurChatRoom: chat=${JSON.stringify(props.state.currentRoom.chat)}`);

    return (
        <div className="curchatroom">
            <h2>{props.state.currentRoom.title}</h2>
            <h3>{props.state.user}</h3>
            <ul className="chat">
            {props.state.currentRoom.chat.map( (item) => { 
                        return <li key={item.user}>
                            {item.user}:  {item.message}
                        </li>
                        }
                    )
                }
            </ul>

        </div>
    );
};
