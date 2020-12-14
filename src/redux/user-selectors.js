import {createSelector} from "reselect";

export const getUsersDataSelector = (state) => {
    return state.usersPage.users
}
export const getUsersData = createSelector(getUsersDataSelector,
    (users) => {
        return users
    }
)
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getCurrentPagesBox = (state) => {
    return state.usersPage.currentPagesBox
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
