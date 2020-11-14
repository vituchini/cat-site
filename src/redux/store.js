import messagesReducerReducer from './messages-reducer'
import profileReducer from './profile-reducer'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Fuck U', likesCount: 20},
                {id: 2, message: 'Fuck I', likesCount: 2},
                {id: 3, message: 'Fuck All', likesCount: -1000}
            ],
            newPostText: ''
        }
        ,
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Jopa'},
                {id: 2, name: 'Yaiki'},
                {id: 3, name: 'Sasha'}
            ],
            messagesData: [
                {id: 1, message: 'Lol'},
                {id: 2, message: 'Haha'},
                {id: 3, message: 'Sho?'}
            ],
            newMessageText: ''
        }

    },
    _rerenderEntireTree() {
    },

    copyRerenderEntireTree(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.messagesPage = messagesReducerReducer(this._state.messagesPage,action)
        this._rerenderEntireTree(this._state, this.dispatch.bind(this))
    }

}



export default store
window.store = store