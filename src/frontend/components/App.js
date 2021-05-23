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
import { apiCreate, apiList, apiJoin, apiLeave, apiMembers, apiUpdate, apiDelete, apiFile, apiDeleteAll, apiChat } from './Api';
import { CurChatRoom } from './CurChatRoom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            chatrooms: [{'id':'0', 'title':'Initial room'}],
            user: '',
            currentRoomId: '0',
            currentRoom: {'id':'0', 'title':'Inital room', 'chat':[{'user':'roomadmin', 'message':'hello'}]},
        };
        this.setCurrentRoomId = this.setCurrentRoomId.bind(this)
        console.log(`constructor: state:${JSON.stringify(this.state)}`);
    };

    componentDidMount() {
        this.setState({loading: true});
        apiList().then( chatrooms => {
                    this.setState({ chatrooms: chatrooms });
                    this.setState({loading: false});
                    console.log(`apList: chatrooms=${JSON.stringify(this.state.chatrooms)}`);
                }
            );
        this.setState({ user: "brita-budnick" });
        // console.log(`componentDidMount: chatrooms=${JSON.stringify(this.state.chatrooms)}`);
    };

    setCurrentRoomId(roomId) {
        this.setState({ currentRoomId: roomId });
        let request = {'id': roomId};
        console.log(`setCurrentRoomId: request=${JSON.stringify(request)}`);
        this.setState({loading: true});
        apiChat(request).then( currentRoom => {
                    this.setState({ currentRoom: currentRoom });
                    this.setState({loading: false});
                    console.log(`setCurrentRoomId: currentroomID=${this.state.currentRoomId}`);
                    console.log(`setCurrentRoomId: currentRoom=${JSON.stringify(this.state.currentRoom)}`);
                }
            );
    }

    render() {
        // console.log(`App render: chatrooms=${JSON.stringify(this.state.chatrooms)}`);
        if(this.state.loading) { 
            console.log(`App: loading...`);
            return (
                <div>
                    <h1 className="visually-hidden">Loading...</h1>
                </div>
            );
        }

        return (
            <div>
                <Header />
                <NavBar state={this.state} />
                <SideBar state={this.state} setCurrentRoomId={this.setCurrentRoomId}/>
                <CurChatRoom state={this.state} />
                <MessageBox />
                <Footer />
            </div>
        );
    };
};

export default App;
