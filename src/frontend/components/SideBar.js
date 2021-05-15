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

    return (
        <aside className="sidebar">
            <ul className="roomlist">
                {props.chatrooms.map( room => {
                    return <li key={room.id}>
                        <a onClick={ () => props.setCurrentRoom(room.id) } href="#">
                        {room.title}
                        </a>
                    </li>    
                })}

            </ul>
        </aside>
    )
};
