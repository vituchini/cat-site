import * as axios from "axios";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Fuck U', likesCount: 20},
        {id: 2, message: 'Fuck I', likesCount: 2},
        {id: 3, message: 'Fuck All', likesCount: -1000}
    ],
    newPostText: '',
    profile: null
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

        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text})

export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserProfile = (userId) => (dispatch) => {
    return profileAPI.setUserProfile(userId)
        .then(res => {
            dispatch(setUserProfileSuccess(res.data))
        })
}

export default profileReducer

