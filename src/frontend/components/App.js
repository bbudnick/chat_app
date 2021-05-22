/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Header';
import { NavBar } from './NavBar';
import SideBar from './SideBar';
import { Footer } from './Footer';
import { apiList, apiChat } from './Api';
import { CurChatRoom } from './CurChatRoom';
import { MessageBox } from './MessageBox';

const userObj = {
    user: "default"
}
export const UserContext = React.createContext(userObj);

const App = () => {

    //[reactive value, setter]
    const [list, setList] = useState([]);
    const [userName, setUserName] = useState("");

    //provide list as dependency so that change in list is tracked
    //and useEffect is run when list changes 
    useEffect(async () => {
        setList(await apiList());
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault(); 
        userObj.user = userName; 
        alert(`Your username is now ${userName}`);
    }

    return (
        <UserContext.Provider value={userName}>
            <div>
                <Header />
                <form onSubmit={handleSubmit}>
                <label>
                    Please declare your username:
                <input
                        placeholder="username"
                        required="required"
                        type="text"
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                    />
                </label>
                <button type="submit">submit</button>
            </form>
                <SideBar chatrooms={list} />
            </div>
        </UserContext.Provider>

    );
};


export default App;

{/* <NavBar /> */ }


{/* 
            <CurChatRoom />
            <MessageBox />
            <Footer /> */}

