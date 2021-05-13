import React, { useState } from "react";
import { apiList, apiDelete } from './Api';

export function DeleteChatRoomForm(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //Check if chatroom exists 
        let chatRoomCheck = apiList(name);
        if (chatRoomCheck == true) {
            //Delete chatroom from list of existing chatrooms
            apiDelete(name);
            alert(`Deleting chatroom ${name}`)
        }
        else
            alert(`Unable to delete ${name}, does not exist`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name of chatroom to be deleted:
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