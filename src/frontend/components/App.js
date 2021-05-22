/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React from 'react';
import { useEffect, useState } from 'react';
import { Header } from './Header';
import { NavBar } from './NavBar';
import SideBar from './SideBar';
import { Footer } from './Footer';
import { apiList, apiChat } from './Api';
import { CurChatRoom } from './CurChatRoom';
import { MessageBox } from './MessageBox';

const App = () => {

    //[reactive value, setter]
    const [list, setList] = useState([]);

    useEffect(async () => {
        setList(await apiList());
    }, [list])

    console.log(JSON.stringify(`${list}`))


    return (
        <div>
            <Header />
            <SideBar chatrooms={list}></SideBar>
            <NavBar />


            {/* 
            <CurChatRoom />
            <MessageBox />
            <Footer /> */}
        </div>
    );
};

export default App;
