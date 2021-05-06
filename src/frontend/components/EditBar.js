/*
    EditBar.js

    The EditBar react component.  This provides button controls above the Editor component to be able to handle the following actions:
    1. Edit current note
    2. Save current note
    3. Delete current note

    All actions are passed back up to the parent component to be handled by an ancestor.  
*/

import '../styles/App.css';
import React from 'react';
import {FaRegSave, FaRegEdit} from 'react-icons/fa';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BiArrowBack} from 'react-icons/bi';

function EditBar(props) {
    let text = props.readOnly ? "Read-only" : "Editing";
    return (
        <div className="editbar">
            <button type="button" className="editbar-button" onClick ={props.backAction} name="backClick" id="backClick" label="back"
            style={{display: props.backButton ? 'block' : 'none' }}><span className="visually-hidden">Go Back</span><BiArrowBack/></button>
            <button type="button" className="editbar-button" onClick ={props.editAction} name="editMode" id="editMode" label="edit"><span className="visually-hidden">Edit</span><FaRegEdit/></button>
            <span className="edit-text">{text}</span>
            <button type="button" className="editbar-button" onClick ={props.saveAction} name="save" id="save" label="save"><span className="visually-hidden">Save</span><FaRegSave/></button>
            <button type="button" className="editbar-button" onClick={props.deleteAction} name="delete" id="delete" label="delete"><span className="visually-hidden">Delete</span><RiDeleteBin6Line/></button> 
        </div>
    );
};

export default EditBar;