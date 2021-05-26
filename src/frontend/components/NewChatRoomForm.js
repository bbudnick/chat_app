/*
    The New Chat Room Form accepts the name of a new chatroom as input from a user. 
    This function includes a form that stores as state the value the user contributes. 
    When they've submitted that new chat room name, it is packaged into a JSON object payload
    and submitted to the apiCreate function as a parameter. 
    The API appends the new chat room to the list of chat rooms and automatically generates an
    ID for that new chatroom. 

    State holds the user's input which is consistent with the React docs:
    https://reactjs.org/docs/forms.html

*/



import React, { useState } from "react";
import { apiCreate } from "./Api";

export function NewChatRoomForm() {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let NewChatRoom = { "title": name}
        apiCreate(NewChatRoom);
        alert(`Successfully added new chatroom ${name}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
               Create a new chatroom? 
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
