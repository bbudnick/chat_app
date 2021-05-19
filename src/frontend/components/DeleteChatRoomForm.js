import React, { useState } from "react";
import { apiList, apiDelete } from './Api';

export function DeleteChatRoomForm(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let toBeDeleted = {}; 
        const listResult = apiList();

        for(key in listResult){
            if(key.title == name)
                toBeDeleted.id = key.id; 
        }

        let deleteResult = apiDelete(toBeDeleted); 

        if(deleteResult >= 300)
            alert(`Nope.`);
        else
            alert(`Successfully deleted ${name}`);
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
