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
        };
        /* This would be appropriate for a callback */
        //this.apiList = this.apiList.bind(this)
    };


    async componentDidMount() {
        //call apiList to list the chatrooms 
        //refresh if create new room has been called by child 
        let currentChatrooms = await apiList();
        let arr = [];
        Object.keys(currentChatrooms).forEach((key) => {
            arr.push(currentChatrooms[key]);
        });

        this.setState({ user: "brita-budnick" });
        this.setState({ version: this.props.version });
        this.setState({ chatrooms: arr });
    };

    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <SideBar data={this.state.chatrooms} />
                <CurChatRoom />
                <MessageBox />
                <Footer />
            </div>
        );
    };
};



export default App;
