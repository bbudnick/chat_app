import React, { useState } from "react";
import { apiCreate } from "./Api";

export function NewChatRoomForm(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //append new chatroom title to list of chatrooms
        //payload should be JSON object, pass as title property 
        let NewChatRoom = { "title": name, "user": "nobody"}
        apiCreate(NewChatRoom);
        alert(`Successfully added chat room ${name}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name of new chatroom:
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
