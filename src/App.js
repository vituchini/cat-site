import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header.js";
import Messages from "./components/Messages/Messages";


function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile
                            postsData={props.state.profilePage.posts}
                            addPost={props.addPost}
                            newPostText={props.state.profilePage.newPostText}
                            updateNewPostText={props.updateNewPostText}
                        />}/>
                    <Route path='/messages' render={() => <Messages dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
