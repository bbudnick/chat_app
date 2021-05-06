/*
    The home page is the page that encapsulates the SideBar, ChatLog, MessageBox, 
    and Footer components. Since this is the parent of the SideBar, ChatLog, and MessageBox, 
    some button actions in those components are handled here. 
*/

import React, { useState, useEffect } from 'react';

import '../styles/App.css';
import { MessageBox } from './MessageBox';
import { SideBar } from './SideBar';
import { CurChatRoom } from './CurChatRoom';
import { Header } from './Header';
import { Footer } from './Footer';
import { apiCreate, apiList, apiJoin, apiLeave, apiMembers, apiUpdate, apiDelete, apiFile, apiDeleteAll } from './Api';
import Loader from "react-loader-spinner";

const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';
const sampleChat = 'Welcome to FelixChat! Choose a chatroom to join or create a new one!';


export function HomePage(props) {
    let [list, setList] = useState([]);
    let [current, setCurrent] = useState({ id: null, username: '', chat: sampleChat });
    let [isLoading, setIsLoading] = useState(false);
    let [readOnly, setReadOnly] = useState(true);
    let [width, setWidth] = useState(window.innerWidth);
    let [hideMessageBox, setHideMessageBox] = useState(false);
    let [hideSideBar, setHideSideBar] = useState(false);
    let [backButton, setBackButton] = useState(false);
    let [onMessageBox, setOnMessageBox] = useState(false);

    useEffect(async () => {
        setIsLoading(true);
        setList(await apiList(props.user));
        setIsLoading(false);
        document.getElementById('save').disabled = true;
        if (width <= 768) {
            if (!onMessageBox) {
                setHideMessageBox(true);
                setHideSideBar(false);
            }
            else {
                setHideMessageBox(false);
                setHideSideBar(true);
            }
            setBackButton(true);
        }
        else {
            setHideMessageBox(false);
            setHideSideBar(false);
            setBackButton(false);
        }
        window.addEventListener("resize", handleWindowResize);
    }, [hideMessageBox, width]);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    let usernameChange = (e) => {
        setCurrent({ id: current.id, username: e.target.value, chat: current.chat });
    }

    let chatroomTitleChange = (e) => {
        setCurrent({ id: current.id, chatroomtitle: e.target.value, chat: current.chat });
    };

    let messageChange = (e) => {
        setCurrent({ id: current.id, username: current.username, chat: e.target.value });
    }

    let searchChange = async (e) => {
        setList(await apiFind(props.user, e.target.value));
    };

    let listSelect = (id, title, messagelog) => {
        setCurrent({ id: id, title: title, messagelog: messagelog });
        setReadOnly(true);
        document.getElementById('chatroom-title').readOnly = true;
        document.getElementById('messagelog').readOnly = true;
        document.getElementById('editMode').disabled = false;
        document.getElementById('save').disabled = true;
        if (hideMessageBox === true) {
            setHideMessageBox(false)
            setHideSideBar(true)
            setOnMessageBox(true)
        }
    };

    let openNew = (id, title, messagelog) => {
        setCurrent({ id: id, title: title, messagelog: messagelog });
        setReadOnly(false);
        document.getElementById('chatroom-title').readOnly = false;
        document.getElementById('chatroom-body').readOnly = false;
        document.getElementById('editMode').disabled = true;
        document.getElementById('save').disabled = false;
        document.getElementById('chatroom-body').placeholder = "Start a conversation here";
        if (hideMessageBox === true) {
            setHideMessageBox(false)
            setHideSideBar(true)
            setOnMessageBox(true)
            setReadOnly(true)
        }
    };

    let addAction = async () => {
        let newChatRoom = "New Chat Room"
        const res = await apiAdd(props.user, newChatRoom, "");
        setList(await apiList(props.user));
        openNew(res.insertedId, newChatRoom, "");
    };

    let editAction = (e) => {
        document.getElementById('chatroom-title').readOnly = false;
        document.getElementById('chatroom-body').readOnly = false;
        setReadOnly(false);
        document.getElementById('editMode').disabled = true;
        document.getElementById('save').disabled = false;
    };


    let saveAction = async () => {
        console.log('Edit: ' + current.id + ' ' + current.chatroomtitle);
        document.getElementById('save').disabled = true;
        setReadOnly(true);
        document.getElementById('editMode').disabled = false;
        document.getElementById('chatroom-title').readOnly = true;
        document.getElementById('message-body').readOnly = true;
        await apiEdit(props.user, current.id, current.chatroomtitle, current.messagelog);
        setList(await apiList(props.user));
    };

    let backAction = () => {
        setHideMessageBox(true);
        setHideSideBar(false);
        setOnMessageBox(false);
    };

    if (isLoading) {
        return (
            <main className="spinner">
                <h1 className="visually-hidden">FelixChat</h1>
                <Loader
                    type="Puff"
                    color="#DAF7A6"
                    height={100}
                    width={100}
                    timeout={8000} //3 secs
                />
            </main>
        );
    }

    return (
        <div className="my-container">
            <link rel="stylesheet" type="text/css" href={bootstrap} />
            <header>
                <h1 className="visually-hidden">FelixChat</h1>
            </header>
            <section className="grid-container">
                <SideBar searchChange={searchChange} chatroomList={list} listSelect={listSelect} addAction={addAction} isHidden={hideSideBar} />
                <MessageBox readOnly={readOnly} editAction={editAction} saveAction={saveAction} username={current.username} body={current.chat}
                    messageChange={messageChange} usernameChange={usernameChange} isHidden={hideMessageBox} backButton={backButton} backAction={backAction} />
            </section>
        </div>
    );
};
