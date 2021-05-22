/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React from 'react';
import globalHook from 'use-global-hook';
import { useEffect, useState } from 'react';
import Header from './Header';
import { NavBar } from './NavBar';
import SideBar from './SideBar';
import { Footer } from './Footer';
import { apiList, apiChat } from './Api';
import { CurChatRoom } from './CurChatRoom';
import { MessageBox } from './MessageBox';

const App = () => {

    //[reactive value, setter]
    const [list, setList] = useState([]);
    const [user, setUser] = useState(null);

    //provide list as dependency so that change in list is tracked
    //and useEffect is run when list changes 
    useEffect(async () => {
        setList(await apiList());
    }, [list])

    return (
        <div>
            <Header userUpdate={username => setUser(username)}/>
            <SideBar chatrooms={list}></SideBar>
            {/* <NavBar /> */}


            {/* 
            <CurChatRoom />
            <MessageBox />
            <Footer /> */}
        </div>
    );
};

export default App;
