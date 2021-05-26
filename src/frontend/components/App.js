/* App.js
*
*    The root module of the frontend.
*
*/

import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Header';
import { NavBar } from './NavBar';
import SideBar from './SideBar';
import { Footer } from './Footer';
import { apiList, apiUpdate, apiChat } from './Api';
import { CurChatRoom } from './CurChatRoom';
import { MessageBox } from './MessageBox';

const userObj = {
    user: "default"
}
export const UserContext = React.createContext(userObj);

const App = () => {

    //[reactive value, setter]
    const [list, setList] = useState([{'id':'0', 'title':'Initial room'}]);
    const [currentUser, setCurrentUser] = useState('roomadmin');
    const [currentRoomId, setCurrentRoomId] = useState('0');
    const [currentRoom, setCurrentRoom] = useState({'id':'0', 'title':'Inital room', 'chat':[{'user':'roomadmin', 'message':'hello'}]});
    const [loading, setLoading] = useState(false);

    //provide list as dependency so that change in list is tracked
    //and useEffect is run when list changes 
    useEffect(() => {
        setLoading(true);
        apiList().then ( chatrooms => {
            setList(chatrooms);
            setLoading(false);
        });
    }, [list]);

    useEffect(() => {
        if (currentRoomId === '0') {
            return;
        }
        setLoading(true);
        let request = {'id': currentRoomId};
        apiChat(request).then ( chatroom => {
            setCurrentRoom(chatroom);
            setLoading(false);
        });
    }, [currentRoomId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentUser(e.target.currentUser.value); 
        userObj.user = e.target.currentUser.value; 
        alert(`Your username is now ${e.target.currentUser.value}`);
    }

    const setRoomId = (roomId) => {
        setCurrentRoomId(roomId);
    };

    const updateRoom = (request) => {
        apiUpdate(request).then(response => {
            if (!response.result.ok)
                alert(`Update API not currently available`)
            else if (!response.result.nModified) 
                alert(`Didn't update the chat room`);
            else {
                let request = {'id': currentRoomId};
                setLoading(true);
                apiChat(request).then ( chatroom => {
                    setCurrentRoom(chatroom);
                    setLoading(false);
                });
            }
            
        });
    };

    return (
        <UserContext.Provider value={currentUser}>
            <div>
                <Header />
                <form onSubmit={handleSubmit}>
                <label>
                    Please declare your username:
                <br></br>
                <input
                        placeholder="User name"
                        required="required"
                        type="text"
                        name="currentUser"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
                <SideBar chatrooms={list} currentUser={currentUser} setRoomId={setRoomId}/>
                <CurChatRoom currentRoom={currentRoom} currentUser={currentUser} />
                <MessageBox currentRoomId={currentRoomId} currentUser={currentUser} updateRoom={updateRoom} />
                <Footer />
            </div>
        </UserContext.Provider>

    );
};

export default App;
