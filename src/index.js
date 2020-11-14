import './index.css'
import * as serviceWorker from './serviceWorker'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
// import {Provider} from "./StoreContext";
import {Provider} from 'react-redux'


let rerenderEntireTree = (store) => {

    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>

        ,
        document.getElementById('root')
    );
}


rerenderEntireTree(store)

// store.subscribe(() => {
//     rerenderEntireTree(store)
// })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();