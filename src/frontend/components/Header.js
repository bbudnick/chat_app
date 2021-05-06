/*
    The header holds the page title and logo
*/

import React from 'react';
import styles from '../styles/Header.module.css';
import Logo from './logo.png';

export function Header() {
    return (
        <div>
            <img className={styles.avatar} src={Logo} alt="Logo"/>
            <h1 className={styles.bigblue}>Header of Glory!</h1>
        </div>
    );
};