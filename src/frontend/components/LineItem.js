/*
    LineItem is a clickable link that makes an API call to join or delete
    a chatroom, depending on the user's choice. 

    The ID of the chatroom the user clicks is passed as a JSON object
    in the parameters of the apiJoin or apiDelete function. 


*/



import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
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
        if (result >= 300)
            alert(`No can do `)
        else
            alert(`You have joined`)
    }
    return (
        <ul>
            <a href="#" onClick={handleClick}>
                {props.value}
            </a>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ul>



    )
}


export default LineItem;