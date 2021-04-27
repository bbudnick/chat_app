/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React from 'react';
import '../stylesheets/style.css';
import { ChatLibrary } from './ChatLibrary';
import { CurChatRoom } from './CurChatRoom';
import { Header } from './Header';
import { Footer } from './Footer';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount() {
    };

    render() {
        return (
            <section>
                <h2>Hello World</h2>
                <h3>Hi Brita, our 1st frontend app!</h3>
                <Header />
                <ChatLibrary />
                <CurChatRoom />
                <Footer />
                

            </section>
        );
    };
};


export default App;