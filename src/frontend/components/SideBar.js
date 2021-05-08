/*
    This function encompasses the side bar where 
    all chatrooms are listed and new chatrooms can be
    generated. 
*/


import React from 'react';

export function SideBar(props) {
    const { chatrooms } = props.chatrooms; 
    return (
        <div>
            <h3>Current Chatrooms</h3>
            <hr />
            { chatrooms && 
                chatrooms.map(chatroom => {
                    return (
                            <ul>
                                <li>{chatroom._id}</li>
                                <li>
                                    <p key={chatroom._id}>{chatroom.title}</p>
                                </li>
                            </ul>
                    )
                })}
        </div>
    );
};
