import React, { useState } from "react";
import { apiJoin } from './Api';

export function JoinChatRoom(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let joinRoom = {"id": "60a8330f22818ba568fbfd0e", "user": "Hankie"};
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