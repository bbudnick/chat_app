/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React from 'react';
import { HomePage } from './HomePage';
import '../styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        };
    };

    componentDidMount() {
        this.setState({user: "brita-budnick"});
        this.setState({version: this.props.version});
    };

    render() {
        return (
            <Router>
                <Route exact path="/" render={() => <HomePage user={this.state.user}/>}/>
            </Router>
            
        );
    };
};


export default App;