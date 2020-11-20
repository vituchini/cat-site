import {authAPI} from "../api/api";

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
                isAuth: !action.data.login ? false : true
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

export const setUserDataSuccess = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const toggleIsFeatching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const setUserData = () => (dispatch) => {

    dispatch(toggleIsFeatching(true))

    authAPI.setUserData().then(res => {
        if (res.resultCode === 0) {
            let {id, email, login} = res.data
            dispatch(setUserDataSuccess(id, email, login))
        }
        dispatch(toggleIsFeatching(false))
    })

}

export default authReducer

