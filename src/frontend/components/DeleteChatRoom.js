import React from 'react';

let DeleteChatRoom = (e) => {
    e.preventDefault();
    alert(`You clicked chat id` + `${props.id}`);
    let currentID = props.id;
    let testUser = {
        "id": currentID,
    }
    let result = apiDelete(testUser)
    if (result >= 300)
        alert(`No can do `)
    else {
        alert(`Chatroom deleted`)
    }
}

export default DeleteChatRoom; 