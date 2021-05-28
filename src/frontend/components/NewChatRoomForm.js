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

let NewChatRoomForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!e.target.newroom.value) {
            alert(`No valid room title`);
        } else {
            let request = { 
                "users": ["roomadmin"],
                "title": e.target.newroom.value,
                "chat": [{"user": "roomadmin", "message": "hello"}]
            };
            props.createRoom(request);
        }
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

export default NewChatRoomForm;
