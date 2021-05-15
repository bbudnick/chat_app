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
import { apiCreate, apiList, apiJoin, apiLeave, apiMembers, apiUpdate, apiDelete, apiFile, apiDeleteAll } from './Api';
import { CurChatRoom } from './CurChatRoom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatrooms: [],
            user: '',
            currentRoom: '',
        };
        /* This would be appropriate for a callback */
        this.setCurrentRoom = this.setCurrentRoom.bind(this)
    };


    async componentDidMount() {
        //call apiList to list the chatrooms 
        //refresh if create new room has been called by child 
        let chatrooms = await apiList();

        this.setState({ user: "brita-budnick" });
        this.setState({ version: this.props.version });
        this.setState({ chatrooms: chatrooms });
    };

    setCurrentRoom(room) {
        this.setState({ currentRoom: room });
    }

    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <SideBar chatrooms={this.state.chatrooms} setCurrentRoom={this.setCurrentRoom}/>
                <CurChatRoom currentRoom={this.state.currentRoom} />
                <MessageBox />
                <Footer />
            </div>
        );
    };
};



export default App;
