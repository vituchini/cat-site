import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree=(state,addPost,updateNewPostText)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}  addPost={addPost} updateNewPostText={updateNewPostText}/>

        </React.StrictMode>,
        document.getElementById('root')
    );
}



export default rerenderEntireTree