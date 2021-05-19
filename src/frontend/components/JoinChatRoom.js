import React, { useState } from "react";
import { apiJoin } from './Api';

export function JoinChatRoom(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let joinRoom = {"id": "609ef4f5264d6e3141c2a8cc", "user": "Hankie"};
        apiJoin(joinRoom);
    }
       
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name of chatroom to be joined:
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