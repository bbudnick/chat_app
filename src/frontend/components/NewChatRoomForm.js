import React, { useState } from "react"; 
import { apiCreate } from "./Api";

export function NewChatRoomForm(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault(); 
        //append new chatroom title to list of chatrooms
        // TODO add api call 
        alert(`Creating new chatroom ${name}`)
    }
    return(
        <form onSubmit={handleSubmit}>
        <label>
            First Name:
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