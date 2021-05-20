/*
    LineItem is a clickable link that makes an API call to join or delete
    a chatroom, depending on the user's choice. 

    The ID of the chatroom the user clicks is passed as a JSON object
    in the parameters of the apiJoin or apiDelete function. 


*/



import React from 'react';
import { apiJoin } from './Api';

let LineItem = (props) => {
    function handleClick(e) {
        e.preventDefault();
        alert(`You clicked chat id` + `${props.id}`);
        let currentID = props.id; 
        let testUser = {
            "id": currentID,
            "user": "Henry"
        }
        let result = apiJoin(testUser)
        if(result >= 300 )
            alert(`No can do `)
        else
            alert(`You have joined`)
    }
    return (
        <ul>
            <a href="#" onClick={handleClick}>
                {props.value}
            </a>
        </ul>)
}

export default LineItem;