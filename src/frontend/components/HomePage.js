/*
    The home page is the page that encapsulates the SideBar, ChatLog, MessageBox, 
    and Footer components. Since this is the parent of the SideBar, ChatLog, and MessageBox, 
    some button actions in those components are handled here. 
*/

import React from 'react';
import { ChatLibrary } from './SideBar';
import { CurChatRoom } from './CurChatRoom';
import { Header } from './Header';
import { Footer } from './Footer';
import '../styles/App.css';
import Logo from './logo.png';

export function HomePage() {
    return (
        <div>Empty</div>
    );
};