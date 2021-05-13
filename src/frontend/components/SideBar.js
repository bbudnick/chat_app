/*
    This function encompasses the side bar where 
    all chatrooms are listed and new chatrooms can be
    generated. 
*/


import React, { useState } from 'react';
import { NewChatRoomForm } from './NewChatRoomForm';
import { DeleteChatRoomForm } from './DeleteChatRoomForm';
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export function SideBar(props) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
            <div className="side">
                <ul>
                    {props.data.map(({ _id, title }, index) => <ul key={index}>ID: {_id}, Title: {title}</ul>)}
                </ul>
                <div className="side-options">
                    <Button id="Popover1" type="button">Make a new chat?</Button>
                    <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                        <PopoverBody><NewChatRoomForm /></PopoverBody>
                    </Popover>
                </div>
                <div className="side-options">
                    <Button id="Popover2" type="button">Delete an existing chat?</Button>
                    <Popover placement="bottom" isOpen={popoverOpen} target="Popover2" toggle={toggle}>
                        <PopoverBody><DeleteChatRoomForm /></PopoverBody>
                    </Popover>
                </div>
            </div>
        </div>
    )
};
