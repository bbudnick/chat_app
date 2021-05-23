/*
    This MessageBox is where users will input their chats. 
    A text area is rendered for username and the body of the message. 
    The EditBar component allows the user to submit their username and submit messages. 
    The onChange event passes text up to the parent component for handling. 
*/

import React from 'react';
import { apiUpdate, apiFile } from './Api';

export function MessageBox(props) {
    const sendMessage = (e) => {
        e.preventDefault();
        console.log(`MessageBox: sendMessage messager=${e.target.message.value}`);
        let request = {
            'id': props.state.currentRoomId,
            'chat': {
                'user': props.state.user,
                'message': e.target.message.value
            }
        };
        apiUpdate(request);
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <input type="text" placeholder="Enter message" name="message"></input>
                <button type="submit">Send</button>
            </form>
        </div>

    );
};
