/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React, { useState } from 'react';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { MessageBox } from './MessageBox';
import { SideBar } from './SideBar';
import { Footer } from './Footer';
import { Loader } from "react-loader-spinner";
import { apiCreate, apiList, apiJoin, apiLeave, apiMembers, apiUpdate, apiDelete, apiFile, apiDeleteAll, apiChat } from './Api';
import { CurChatRoom } from './CurChatRoom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatrooms: [],
            user: '',
            currentRoomId: '',
            currentRoom: [],

        };
        /* This would be appropriate for a callback */
        this.setCurrentRoomId = this.setCurrentRoomId.bind(this)
    };

    async componentDidMount() {
        //call apiList to list the chatrooms 
        //refresh if create new room has been called by child 
        let chatrooms = await apiList();

        this.setState({ user: "brita-budnick" });
        this.setState({ version: this.props.version });
        this.setState({ chatrooms: chatrooms });
    };

    async setCurrentRoomId(roomId) {
        this.setState({ currentRoomId: roomId });
        let request = {'id': this.state.currentRoomId};
        let currentRoom = await apiChat(request);
        this.setState({ currentRoom: currentRoom });
        console.log(`current room ID: ${this.state.currentRoomId}`);
        console.log(`current room: ${JSON.stringify(this.state.currentRoom)}`);
    }

    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <SideBar chatrooms={this.state.chatrooms} setCurrentRoomId={this.setCurrentRoomId}/>
                <CurChatRoom currentRoom={this.state.currentRoom} />
                <MessageBox />
                <Footer />
            </div>
        );
    };
};



export default App;
