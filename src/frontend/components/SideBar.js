/*
    This function encompasses the side bar where 
    all chatrooms are listed and new chatrooms can be
    generated. 

    The SideBar child component receives the chatroom object from App.js
    as props. Key value pairs in props are then mapped. Key usage is 
    consistent with current ReactJS documentation: 
    https://reactjs.org/docs/lists-and-keys.html

    Each chatroom is a clickable link that allows the user to choose if they would like to join 
    the chatroom that was clicked or delete it. 

*/



import React from 'react';
import PropTypes from 'prop-types';
import LineItem from './LineItem';

let SideBar = (props) => {
    const lineItem = props.chatrooms.map(({ id, title }, index) =>
        <LineItem key={index} id={id} value={title} />
    )

    return (
        <aside>
            {lineItem}
        </aside>
    )
};

SideBar.propTypes = {
    chatrooms: PropTypes.array.isRequired,
}

export default SideBar;