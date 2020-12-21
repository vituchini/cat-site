import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_CURRENT_PAGES_BOX = 'users/SET_CURRENT_PAGES_BOX'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    currentPagesBox: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})

            }

        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.numOfPage
            }
        }
        case SET_CURRENT_PAGES_BOX: {
            return {
                ...state,
                currentPagesBox: action.numOfBox >= 0 ? action.numOfBox : 1
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        }


        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})

export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (numOfPage) => ({type: SET_CURRENT_PAGE, numOfPage})

export const setCurrentPagesBox = (numOfBox) => ({type: SET_CURRENT_PAGES_BOX, numOfBox})

export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})

export const getUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))


}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess)
}
export const unFollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unFollow, unFollowSuccess)
}
export default usersReducer

