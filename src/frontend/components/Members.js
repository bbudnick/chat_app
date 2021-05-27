/*
    This function encompasses the lists all users of a chatroom
 
*/

import React from 'react';

let Members = (props) => {

    return (
        <div className='members-container'>
            <ul className="members">
                {props.currentRoom.users.map( user => {
                    return <li key={user}>
                        {user}
                    </li>    
                })}

            </ul>        
        </div>
    )
};

export default Members;
