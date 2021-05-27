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
import { apiJoin, apiLeave, apiDelete } from './Api';

let LineItem = (props) => {
    const user = useContext(UserContext);

    function handleClickSetCurrent(e) {
        e.preventDefault();
        if (!`${props.id}`) {
            alert(`Can't find this room.`);
        } else {
            console.log(`LineItem: handleClickSetCurrent: id=${props.id}`);
            props.setRoomId(props.id);
        }
    }

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

    function handleClickLeave(e) {
        e.preventDefault();
        if (!`${props.currentUser}`) {
            alert(`Please provide your username before leaving.`)
            return;
        }

        let request = {
            'id': props.id,
            'user': props.currentUser
        };
        apiLeave(request).then(response => {
            if (!response.result.ok)
                alert(`Leave API not currently available`)
            else if (response.result.nModified) 
                alert(`Thanks for leaving, ${props.currentUser}`);
            else
                alert(`${props.currentUser}, not able to leaver`); 
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
        <ul className="roomlist">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {props.title}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={handleClickSetCurrent}>Set As Current</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={handleClickJoin}>Join</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={handleClickLeave}>Leave</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={handleClickDelete}>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ul>



    )
}


export default LineItem;