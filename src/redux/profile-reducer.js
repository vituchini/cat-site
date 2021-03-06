import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'


let initialState = {
    posts: [
        {id: 1, message: 'Люблю шоколад', likesCount: 99},
        {id: 2, message: 'І тебе також люблю', likesCount: 2},
        {id: 3, message: 'Хочу подарити світу радість', likesCount: 10}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            if (action.newPost) return {
                ...state,
                posts: [...state.posts,
                    {
                        id: state.posts.length + 1,
                        message: action.newPost,
                        likesCount: Math.floor(Math.random() * Math.floor(100))
                    }],
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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
export const addPost = (newPost) => ({type: ADD_POST, newPost})

export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserStatus = (status) => ({type: SET_STATUS, status})

export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = (userId) => async (dispatch) => {
    let res = await profileAPI.setUserProfile(userId)
    dispatch(setUserProfileSuccess(res.data))
    return res
}
export const getStatus = (userId) => async (dispatch) => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(res.data))
    return res
}
export const updateStatus = (status) => async (dispatch) => {
    let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
    return res
}
export default profileReducer

