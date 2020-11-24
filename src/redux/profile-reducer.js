import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Люблю шоколад', likesCount: 99},
        {id: 2, message: 'І тебе також люблю', likesCount: 2},
        {id: 3, message: 'Хочу подарити світу радість', likesCount: 10}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let postText = state.newPostText
            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: state.posts.length + 1,
                        message: postText,
                        likesCount: 0
                    }],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }

        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text})

export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserStatus = (status) => ({type: SET_STATUS, status})

export const setUserProfile = (userId) => (dispatch) => {
    return profileAPI.setUserProfile(userId)
        .then(res => {
            dispatch(setUserProfileSuccess(res.data))
        })
}
export const getStatus = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    return profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}
export default profileReducer

