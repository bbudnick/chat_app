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



import React from "react";
import { apiCreate } from "./Api";

export function NewChatRoomForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        let request = { 
            "users": ["roomadmin"],
            "title": e.target.newroom.value,
            "chat": [{"user": "roomadmin", "message": "hello"}]
        };
        apiCreate(request).then(response => {
            if (!response.result.ok)
                alert(`Create API not currently available`)
            else if (response.result.n) 
                alert(`Successfully added new chatroom ${e.target.newroom.value}`);
            else
                alert(`Not able to create ${e.target.newroom.value}`); 
        });

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
            <input
                    type="text"
                    placeholder="New Room"
                    name="newroom"
                />
            </label>
            <button type="submit">Create Room</button>
        </form>
    );
}
