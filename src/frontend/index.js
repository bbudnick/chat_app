/* index.js
*
    The main entry point that renders the root App component into the DOM.
    
*
*/

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

//ReactDOM.render(<App version = {packageJson.version}/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

  