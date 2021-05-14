/*
    This function encompasses the side bar where 
    all chatrooms are listed and new chatrooms can be
    generated. 
*/


import React, { useState } from 'react';
import { NewChatRoomForm } from './NewChatRoomForm';
import { DeleteChatRoomForm } from './DeleteChatRoomForm';
//import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { Table } from "react-bootstrap";
require('bootstrap/dist/css/bootstrap.css');

export function SideBar(props) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
            <div className="side">
                <Table CurrentChatRooms>
                    <thead>
                        <tr>
                            <th>Current Chat Rooms</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {props.data.map(({ _id, title }, index) => <ul key={index}>ID: {_id}, Title: {title}</ul>)}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                
            </div>
        </div>
    )
};
