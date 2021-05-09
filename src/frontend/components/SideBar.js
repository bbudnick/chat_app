/*
    This function encompasses the side bar where 
    all chatrooms are listed and new chatrooms can be
    generated. 
*/


import React from 'react';

export function SideBar(props) {
    return (
        <div className="currentChat">
            <ul>
                <li>
                    {props._id}
                </li>
                <li>
                    {props.title}
                </li>
            </ul>
        </div>
    )
};
