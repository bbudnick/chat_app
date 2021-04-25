/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React from 'react';
import Logo from './logo.png';

// import '../styles/App.css';

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
                <Header />
                <h2>Hello World</h2>
                <h3>Hi Brita, our 1st frontend app!</h3>
            </section>
        );
    };
};

function Header() {
    return (
    <img src={Logo} alt="Logo" />
    )
}

export default App;