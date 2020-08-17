import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let postsData = [
    {id: 1, message: 'Fuck U', likesCount: 20},
    {id: 2, message: 'Fuck I', likesCount: 2},
    {id: 3, message: 'Fuck All', likesCount: -1000}
]
let dialogsData = [
    {id: 1, name: 'Jopa'},
    {id: 2, name: 'Yaiki'},
    {id: 3, name: 'Sasha'}
]
let messagesData = [
    {id: 1, message: 'Lol'},
    {id: 2, message: 'Haha'},
    {id: 3, message: 'Sho?'}
]
ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
