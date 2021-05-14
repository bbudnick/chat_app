/*
    This function encompasses the side bar where 
    all chatrooms are listed and new chatrooms can be
    generated. 
*/


import React, { useState } from 'react';
import { NewChatRoomForm } from './NewChatRoomForm';
import { DeleteChatRoomForm } from './DeleteChatRoomForm';
import { Table, Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const borderStyle = {
    border: "1px dashed navy"
  };

export function SideBar(props) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

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
                            <tr onClick={() => alert(`I done been clicked`)}>
                                <td key={index}>
                                    {title}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>

    )
};
