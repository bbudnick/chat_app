/*
    This function encompasses the side bar where 
    all chatrooms are listed and new chatrooms can be
    generated. 
*/


import React from 'react';

export function SideBar(props) {

    return (
        <aside className="sidebar">
            <ul className="roomlist">
                {props.state.chatrooms.map( room => {
                    return <li key={room.id}>
                        <a onClick={ () => props.setCurrentRoomId(room.id) } href="#">
                        {room.title}
                        </a>
                    </li>    
                })}

            </ul>
        </aside>
    )
};
