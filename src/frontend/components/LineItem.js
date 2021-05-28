/*
    LineItem is a clickable link that makes an API call to join or delete
    a chatroom, depending on the user's choice. 

    The ID of the chatroom the user clicks is passed as a JSON object
    in the parameters of the apiJoin or apiDelete function.
    
    Because user is from the global context, to avoid prop drilling, the UserContext
    is imported from App.js. 

*/

import React, { useContext, useState } from 'react';
import { UserContext } from './App.js';
import Dropdown from 'react-bootstrap/Dropdown';

let LineItem = (props) => {
    const user = useContext(UserContext);
    const [pinned, setPinned] = useState(false);

    const handleClickSetCurrent = (e) => {
        e.preventDefault();
        if (!`${props.id}`) {
            alert(`Can't find this room.`);
        } else {
            props.setRoomId(props.id);
        }
    };

    const handleClickJoin = (e) => {
        e.preventDefault();
        if (!`${props.currentUser}`) {
            alert(`Please provide your username before joining.`)
        } else {
            let request = {
                'id': props.id,
                'user': props.currentUser
            };
            props.joinRoom(request);
        }
    };

    const handleClickLeave = (e) => {
        e.preventDefault();
        if (!`${props.currentUser}`) {
            alert(`Please provide your username before leaving.`)
        } else {
            let request = {
                'id': props.id,
                'user': props.currentUser
            };
            props.leaveRoom(request);
        }
    };

    const handleClickDelete = (e) => {
        e.preventDefault();
        if (!`${props.id}`) {
            alert(`No valid chat room id`)
        } else {
            let request = {
                'id': props.id
            };
            props.deleteRoom(request);
        }
    };

    const handleClickPin = (e) => {
        e.preventDefault();
        pinned ? setPinned(false) : setPinned(true);
        props.setPinned(props.id);
    };

    return (
        <ul className="roomlist">
            <Dropdown >
                <Dropdown.Toggle variant={pinned ? "info" : "success"} id="dropdown-basic">
                    {props.title}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" name="current-btn" onClick={handleClickSetCurrent}>Set As Current</Dropdown.Item>
                    <Dropdown.Item href="#" name="join-btn" onClick={handleClickJoin}>Join</Dropdown.Item>
                    <Dropdown.Item href="#" name="leave-btn" onClick={handleClickLeave}>Leave</Dropdown.Item>
                    <Dropdown.Item href="#" name="delete-btn" onClick={handleClickDelete}>Delete</Dropdown.Item>
                    <Dropdown.Item href="#" name="pin-btn" onClick={handleClickPin}>Pin</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ul>
    )
}

export default LineItem;
