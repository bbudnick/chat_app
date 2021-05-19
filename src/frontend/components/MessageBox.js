/*
    This MessageBox is where users will input their chats. 
    A text area is rendered for username and the body of the message. 
    The EditBar component allows the user to submit their username and submit messages. 
    The onChange event passes text up to the parent component for handling. 
*/

import React, { useState } from 'react';
import { apiUpdate } from './Api';

export function MessageBox(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let incomingMessage = {
            "id": "60a47a05ff14ce15d6ba7bd7",
            "chat": {
                "user": "Hankie",
                "message": "Always hungry."
            }
        }
        apiUpdate(incomingMessage);

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
