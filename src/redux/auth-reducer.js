import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetchingAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetchingAuth: action.isFetching
            }
        default:
            return state
    }
}

export const setUserDataSuccess = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login},
    isAuth
})
export const toggleIsFeatching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const setUserData = () => (dispatch) => {

    return authAPI.setUserData().then(res => {
        if (res.resultCode === 0) {
            let {id, email, login} = res.data
            console.log({id, email, login,})
            dispatch(setUserDataSuccess(id, email, login, true))
        }
        dispatch(toggleIsFeatching(false))
    })
}
export const login = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setUserData())

        } else {
            debugger
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
    dispatch(toggleIsFeatching(false))
}

export const logout = () => (dispatch) => {

    authAPI.logout().then(res => {
        dispatch(toggleIsFeatching(true))

        if (res.data.resultCode === 0) {
            dispatch(setUserDataSuccess(null, null, null, null))
            dispatch(setUserData())
        }
    })
    dispatch(toggleIsFeatching(false))
}

export default authReducer

