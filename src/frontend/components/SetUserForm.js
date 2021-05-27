/*
    The Set User Form accepts the name of a new chatroom as input from a user. 
    This function includes a form that stores as state the value the user contributes. 
    When they've submitted that new chat room name, it is packaged into a JSON object payload
    and submitted to the apiCreate function as a parameter. 
    The API appends the new chat room to the list of chat rooms and automatically generates an
    ID for that new chatroom. 

    State holds the user's input which is consistent with the React docs:
    https://reactjs.org/docs/forms.html

*/



import React from "react";

export function SetUserForm(props) {

    return (
        <form onSubmit={props.handleSetUser}>
            <label>
            <input
                    placeholder="User name"
                    required="required"
                    type="text"
                    name="currentUser"
                />
            </label>
            <button type="submit">Set User</button>
        </form>
    );
}
