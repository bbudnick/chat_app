/*
    The navbar assists in navigating through pages in the site
*/

import React from 'react';
import { apiCreate, apiList, apiJoin, apiLeave, apiMembers, apiUpdate, apiDelete, apiFile, apiDeleteAll, apiChat } from './Api';

export function NavBar(props) {
    const createUser = (e) => {
        console.log(`NavBar: createUser user=`);
    }

    const createRoom = (e) => {
        console.log(`NavBar: createRoom title=`);
    }

    const joinRoom = () => {
        let request = {'id':props.state.currentRoomId, 'user': props.state.user};
        console.log(`NavBar: joinRoom request=${JSON.stringify(request)}`);
        apiJoin(request);
    }
    
    const leaveRoom = () => {
        let request = {'id':props.state.currentRoomId, 'user': props.state.user};
        console.log(`NavBar: leaveRoom user=${props.state.user} from room=${props.state.currentRoomId}`);
        apiLeave(request);
    }

    const listMembers = () => {
        console.log(`NavBar: listMembers members=${props.state.currentRoom.users} from room=${props.state.currentRoomId}`);
    }

    const send = () => {
        console.log(`NavBar: send message= to room=${props.state.currentRoomId}`);
    }

    const attachFile = () => {
        console.log(`NavBar: attachFile file= to room=${props.state.currentRoomId}`);
    }

    const deleteRoom = () => {
        let request = {'id':props.state.currentRoomId};
        console.log(`NavBar: delete room=${props.state.currentRoomId}`);
        apiDelete(request);
    }

    return (
        <div className="navbar">
            <a href="#" onClick={() => createUser()}>Create User</a>
            <a href="#" onClick={() => createRoom()}>Create Room</a>
            <a href="#" onClick={() => joinRoom()}>Join</a>
            <a href="#" onClick={() => leaveRoom()}>Leave</a>
            <a href="#" onClick={() => listMembers()}>Members</a>
            <a href="#" onClick={() => send()}>Send</a>
            <a href="#" onClick={() => attachFile()}>Attach</a>
            {/* <div>
                <form action="JavaScript:createUser()">
                    <input type="text" placeholder="Create user" name="user"></input>
                    <button type="submit">Create User</button>
                </form>
            </div> */}
            <a href="#" className="right" onClick={() => deleteRoom()}>Delete</a>
        </div>

    );
};
