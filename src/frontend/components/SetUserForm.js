/*
    The SetUserForm accepts the name of a user to configure the session.

*/



import React from "react";

let SetUserForm = (props) => {

    let handleSetUser = (e) => {
        e.preventDefault();
        props.setUser(e.target.currentUser.value);
    };

    return (
        <form onSubmit={handleSetUser}>
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

export default SetUserForm;
