/*
    This MessageBox is where users will input their chats. 
    A text area is rendered for username and the body of the message. 
    The EditBar component allows the user to submit their username and submit messages. 
    The onChange event passes text up to the parent component for handling. 
*/

import React from 'react';

let MessageBox = (props) => {
    let multisend = false;
    
    const sendMessage = (e) => {
        e.preventDefault();
        let request = {
            'id': props.currentRoomId,
            'chat': {
                'user': props.currentUser,
                'message': e.target.message.value
            }
        };
        if(multisend) {
            props.multiUpdate(request);
        } else {
            props.updateRoom(request);
        }
    }

    const attachFile = (e) => {
        e.preventDefault();
        console.log(`MessageBox: attachFile file=${e.target.file.value}`);
        let request = {
            'id': props.currentRoomId,
            'file': e.target.file.value // TBD base64() encode contents 1st
        };

        props.attachFile(request);
    }

    const openFile = (e) => {
        e.preventDefault(); 
        let request = {
            'id': props.currentRoomId,
        };
        props.openFile(request);
    }




    return (
        <div className="messagebox">
            <form onSubmit={sendMessage}>
                <input type="text" placeholder="Enter message" name="message"></input>
                <input type="submit" onClick={() => multisend=false} name="send" value="Send"></input>
                <input type="submit" onClick={() => multisend=true} name="send" value="Multi Send"></input>
            </form>
            <form onSubmit={attachFile}>
                <input type="file" id="file" name="file"></input>
                <input type="submit" value="Attach"></input>
            </form>
            <button onClick={openFile}>
                Open File
            </button>
        </div>

    );
}

export default MessageBox;
