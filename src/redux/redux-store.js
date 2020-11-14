import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage:usersReducer,
    auth:authReducer
})
let store = createStore(redusers,applyMiddleware(thunkMiddleware))

export default store

window.store= store