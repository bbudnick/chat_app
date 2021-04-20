/* index.js
*
    The main entry point that renders the root App component into the DOM.
    
    axe-core is being used to programatically audit accessibility.  Take a look
    at the console of the browser to see the axe issues.  Note that this will not
    be loaded in a production environment.

*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import packageJson from '../../package.json';

// ReactDOM.render(<App version = {packageJson.version}/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));

// if (process.env.NODE_ENV !== 'production') {
//     const axe = require('@axe-core/react');
//     axe(React, ReactDOM, 1000);
// }
