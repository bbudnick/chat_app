/*
    This function encompasses the side bar where 
    all chatrooms are listed and new chatrooms can be
    generated. 
*/


import React, { useState } from 'react';
import { NewChatRoomForm } from './NewChatRoomForm';
import { DeleteChatRoomForm } from './DeleteChatRoomForm';
import { Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const borderStyle = {
    border: "1px dashed navy"
};

export function SideBar(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (

        <div>
            <div className="side">
                <Table>
                    <thead>
                        <tr>
                            <th>Current Chat Rooms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(({ _id, title }, index) =>
                            <tr key={index}>
                                {title}
                            </tr>
                        )}
                        <tr>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle caret>
                                    Chatroom Options
                                        </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Join?</DropdownItem>
                                    <DropdownItem>Delete?</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

    )
};
