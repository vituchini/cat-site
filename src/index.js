import './index.css'
import * as serviceWorker from './serviceWorker'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'

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

serviceWorker.unregister();