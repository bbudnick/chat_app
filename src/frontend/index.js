/* index.js
*
    The main entry point that renders the root App component into the DOM.
    
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styles from './styles/App.module.css';


// ReactDOM.render(<App version = {packageJson.version}/>, document.getElementById('root'));
ReactDOM.render(<App className={styles.body}/>, document.getElementById('root'));

  