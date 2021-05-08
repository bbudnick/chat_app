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
            chatrooms: [],
            user: ''
        };
        /* This would be appropriate for a callback */
        //this.apiList = this.apiList.bind(this)
    };

    async componentDidMount() {
        //call apiList to list the chatrooms 
        let temp = await apiList();
        temp.forEach(obj => {
            Object.entries(obj).forEach(([key, value]) =>
                console.log(`${key} ${value}`));
        });

    


        //this.setState({chatrooms: result});
        console.log(result);





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
                {/* <SideBar props={this.state.chatrooms}/>  */}
                <Footer />
            </div>
        );
    };
};


export default App;