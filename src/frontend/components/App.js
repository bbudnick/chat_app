/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React from 'react';
import { Header } from './Header';
import { NavBar } from './NavBar';
import SideBar from './SideBar';
import { Footer } from './Footer';
import { apiList, apiChat } from './Api';
import { CurChatRoom } from './CurChatRoom';
import { MessageBox } from './MessageBox';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chatrooms: [],
            user: '',
            currentRoomId: '',
            currentRoom: [],
        };
    };

    // Invoked immediately after rendering
    // componentDidUpdate = async(props) => {
    //     if (props.chatrooms !== this.props.chatrooms) {
    //         await this.setState({ chatrooms: this.props.chatrooms})
    //     }
    //     if(props.currentRoomId !== this.props.currentRoomId) {
    //         await this.setState({ currentRoomId: this.props.currentRoomId})
    //     }
    // }

    // Invoked immediately
    componentDidMount = async () => {
        let chatrooms = await apiList(); 
        this.setState({ chatrooms : chatrooms });
    };



    render() {
        return (
            <div>
               <Header />
                <NavBar />
                <SideBar chatrooms={this.state.chatrooms}  />
                {/* <CurChatRoom  /> */}
                <MessageBox  />
                <Footer />
            </div>
        );
    };
};



export default App;
