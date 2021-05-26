import React, { useState } from "react";
import { apiLeave } from './Api';

export function LeaveChatRoom(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let leaveRoom = {"id": "609ef4f5264d6e3141c2a8cc", "user": "Wonderwoman"};
        apiLeave(leaveRoom);
    }
       
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Leave chatroom?
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