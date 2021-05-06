/*
    This MessageBox is where users will input their chats. 
    A text area is rendered for username and the body of the message. 
    The EditBar component allows the user to submit their username and submit messages. 
    The onChange event passes text up to the parent component for handling. 
*/

import React from 'react';
import EditBar from './EditBar';
import Footer from './Footer';
import '../styles/App.css';

export function MessageBox(props) {
    return (
        <main className="editor" style={{display: props.isHidden ? 'none' : 'block' }}>
            <EditBar readOnly={props.readOnly} editAction={props.editAction} saveAction={props.saveAction} 
            backButton={props.backButton} backAction={props.backAction} deleteAction={props.deleteAction}/>
            <label htmlFor="username"><span className="visually-hidden">Username</span></label>
            <textarea readOnly id="username" label="title" value={props.username} onChange={props.username}/>
            <label htmlFor="message-body"><span className="visually-hidden">Message body</span></label>
            <textarea readOnly id="message-body" label="body" value={props.body} onChange={props.messageChange}/>
            <Footer/>
        </main>
    );
};
    
export default MessageBox; 