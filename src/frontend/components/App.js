/* App.js
*
*    The root module of the frontend.
*
*/

import React, {useEffect, useState} from 'react';
import Header from './Header';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import { apiCreate, apiList, apiJoin, apiLeave, apiUpdate, apiDelete, apiFile, apiChat } from './Api';
import CurChatRoom from './CurChatRoom';
import MessageBox from './MessageBox';
import Members from './Members';

const userObj = {
    user: "default"
}
export const UserContext = React.createContext(userObj);

const App = () => {

    const [list, setList] = useState([{'id':'0', 'title':'Initial room'}]);
    const [currentUser, setCurrentUser] = useState('roomadmin');
    const [currentRoomId, setCurrentRoomId] = useState('0');
    const [currentRoom, setCurrentRoom] = useState({'id':'0', 'users':['roomadmin'], 'title':'Inital room', 'chat':[{'user':'roomadmin', 'message':'hello'}]});
    const [loading, setLoading] = useState(false);

    // Runs on 1st render only
    useEffect(() => {
        let roomId = localStorage.getItem("currentRoomId");
        let user = localStorage.getItem("currentUser")
        roomId ? setCurrentRoomId(roomId) : null;
        user ? setCurrentUser(user) : null;
        setLoading(true);
        apiList().then ( chatrooms => {
            setList(chatrooms);
            setLoading(false);
        });
    }, []);

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

    const setUser = (currentUser) => {
        setCurrentUser(currentUser); 
        userObj.user = currentUser; 
        alert(`Your username is now ${currentUser}`);
        localStorage.setItem("currentUser", currentUser);
    }

    const setRoomId = (roomId) => {
        setCurrentRoomId(roomId);
        localStorage.setItem("currentRoomId", roomId);
    };

    const createRoom = (request) => {
        apiCreate(request).then(response => {
            if (!response.result.ok)
                alert(`Create API not currently available`)
            else if (!response.result.n) 
                alert(`Not able to create ${request.title}`);
            else {
                setLoading(true);
                apiList().then ( chatrooms => {
                    setList(chatrooms);
                    setLoading(false);
                });
            }     
        });
    }

    const joinRoom = (request) => {
        apiJoin(request).then(response => {
            if (!response.result.ok)
                alert(`Join API not currently available`)
            else if (!response.result.nModified) 
                alert(`${request.user}, you are already a member`);
            else {
                let request = {'id': currentRoomId};
                setLoading(true);
                apiChat(request).then ( chatroom => {
                    setCurrentRoom(chatroom);
                    setLoading(false);
                }); 
            }     
        });
    }
    
    const leaveRoom = (request) => {
        apiLeave(request).then(response => {
            if (!response.result.ok)
                alert(`Leave API not currently available`)
            else if (!response.result.nModified) 
                alert(`${request.user}, not able to leave`); 
            else {
                let request = {'id': currentRoomId};
                setLoading(true);
                apiChat(request).then ( chatroom => {
                    setCurrentRoom(chatroom);
                    setLoading(false);
                }); 
            }
        });
    }      

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

    const deleteRoom = (request) => {
        apiDelete(request).then(response => {
            if (!response.ok)
                alert(`Delete API not currently available`)
            else if (!response.deletedCount) 
                alert(`Room has not been deleted`);
            else {
                setLoading(true);
                apiList().then ( chatrooms => {
                    setList(chatrooms);
                    setLoading(false);
                });
            } 
        });
    } 

    const attachFile = (request) => {
        apiFile(request).then(response => {
            if (!response.result.ok)
                alert(`File API not currently available`)
            else if (!response.result.nModified) 
                alert(`Didn't attach the file`);
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
            <main className="grid-container">
                <Header />
                <NavBar setUser={setUser} createRoom={createRoom} />
                <SideBar chatrooms={list} currentUser={currentUser} setRoomId={setRoomId} 
                    joinRoom={joinRoom} leaveRoom={leaveRoom} deleteRoom={deleteRoom} />
                <Members currentRoom={currentRoom} />
                <CurChatRoom currentRoom={currentRoom} currentUser={currentUser} />
                <MessageBox currentRoomId={currentRoomId} currentUser={currentUser} updateRoom={updateRoom} attachFile={attachFile} />
                <Footer />
            </main>
        </UserContext.Provider>
    );
};

export default App;
