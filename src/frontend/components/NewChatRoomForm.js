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
        let request = { 
            "users": ["roomadmin"],
            "title": name,
            "chat": [{"user": "roomadmin", "message": "hello"}]
        };
        apiCreate(request).then(response => {
            if (!response.result.ok)
                alert(`Create API not currently available`)
            else if (response.result.n) 
                alert(`Successfully added new chatroom ${name}`);
            else
                alert(`Not able to create ${name}`); 
        });

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
