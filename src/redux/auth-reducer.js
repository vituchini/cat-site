import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
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

export const setUserData = () => async (dispatch) => {

    let res = await authAPI.setUserData()
    if (res.resultCode === 0) {
        let {id, email, login} = res.data
        console.log({id, email, login,})
        dispatch(setUserDataSuccess(id, email, login, true))
    }
    return res
}
export const login = (email, password, rememberMe) => async (dispatch) => {

    let res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(setUserData())

    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const logout = () => async (dispatch) => {

    let res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setUserDataSuccess(null, null, null, null))
            dispatch(setUserData())
        }

}

export default authReducer

