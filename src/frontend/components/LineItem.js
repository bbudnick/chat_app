/*
    LineItem is a clickable link that makes an API call to join or delete
    a chatroom, depending on the user's choice. 

    The ID of the chatroom the user clicks is passed as a JSON object
    in the parameters of the apiJoin or apiDelete function.
    
    Because user is from the global context, to avoid prop drilling, the UserContext
    is imported from App.js. 


*/

import React, { useContext } from 'react';
import { UserContext } from './App.js';
import Dropdown from 'react-bootstrap/Dropdown';
import { apiDelete, apiJoin } from './Api';

let LineItem = (props) => {
    const user = useContext(UserContext);

    function handleClickJoin(e) {
        e.preventDefault();
        if (!`${props.currentUser}`) {
            alert(`Please provide your username before joining.`)
            return;
        }

        let request = {
            'id': props.id,
            'user': props.currentUser
        };
        apiJoin(request).then(response => {
            if (!response.result.ok)
                alert(`Join API not currently available`)
            else if (response.result.nModified) 
                alert(`Thanks for joining, ${props.currentUser}`);
            else
                alert(`${props.currentUser}, you are already a member`); 
        });
    }

    function handleClickDelete(e) {
        e.preventDefault();
        if (!`${props.id}`) {
            alert(`No valid chat room id`)
            return;
        }
        
        let request = {
            'id': props.id
        };
        apiDelete(request).then(response => {
            if (!response.ok)
                alert(`Delete API not currently available`)
            else if (response.deletedCount) 
                alert(`${props.title} has been deleted`);
            else
                alert(`${props.title}, was not deleted`); 
        });
    }

    return (
        <ul>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {props.title}
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