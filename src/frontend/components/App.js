/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React from 'react';
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
            chatrooms: '',
            user: ''
        };
    };

    componentDidMount() {
        //call apiList to list the chatrooms 
        
        //save as tuple of id and chatroom name 
        //
        this.setState({ user: "brita-budnick" });
        this.setState({ version: this.props.version });
    };

    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <CurChatRoom />
                <MessageBox />
                <SideBar />
                <Footer />
            </div>
        );
    };
};


export default App;