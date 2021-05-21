/*
    LineItem is a clickable link that makes an API call to join or delete
    a chatroom, depending on the user's choice. 

    The ID of the chatroom the user clicks is passed as a JSON object
    in the parameters of the apiJoin or apiDelete function. 


*/



import React from 'react';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { apiDelete, apiJoin, apiList } from './Api';

let LineItem = (props) => {



    function handleClickJoin(e) {
        e.preventDefault();
        alert(`You clicked chat id` + `${props.id}`);
        let currentID = props.id;
        let testUser = {
            "id": currentID,
            "user": "Henry"
        }
        let result = apiJoin(testUser)
        if (result >= 300)
            alert(`No can do `)
        else
            alert(`You have joined`)
    }

    function handleClickDelete(e) {
        e.preventDefault();
        alert(`You clicked chat id` + `${props.id}`);
        let currentID = props.id;
        let testUser = {
            "id": currentID,
        }
        let result = apiDelete(testUser)
        if (result >= 300)
            alert(`No can do `)
        else {
            alert(`Chatroom deleted`)
        }
    }

return (
    <ul>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.value}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={handleClickJoin}>Join</Dropdown.Item>
                <Dropdown.Item href="#" onClick={handleClickDelete}>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </ul>



)
}


export default LineItem;