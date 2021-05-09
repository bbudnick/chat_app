/*
    This function encompasses the side bar where 
    all chatrooms are listed and new chatrooms can be
    generated. 
*/


import React from 'react';

export function SideBar(props) {
   return (
        <div>
            <ul>
                {props.data.map(({ _id, title}, index) => <li key={index}>ID: {_id}, Title: {title}</li>)}
            </ul>
        </div>
    )
};
