import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    getUsers, setCurrentPagesBox,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader'
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getCurrentPagesBox, getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersData,
} from "../../redux/user-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage,pageSize}=this.props
        this.props.getUsers(currentPage, pageSize)
        document.title = "Users"
    }

    OnPageChanger = (pageNumber) => {
        const {setCurrentPage,getUsers,pageSize} = this.props
        setCurrentPage(pageNumber)
        getUsers(pageNumber, pageSize)

    }

    render() {
debugger
        return <>
            {this.props.isUsersLoading
                ? <Preloader/>
                : <Users {...this.props} OnPageChanger={this.OnPageChanger}/>
            }

        </>
    }
}

let mapStateToProps = (state) => {
    debugger
    return {
        users: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        currentPagesBox: getCurrentPagesBox(state),
        followingInProgress: getFollowingInProgress(state),
        isUsersLoading: getIsFetching(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            setCurrentPage,
            setCurrentPagesBox,
            getUsers,
        }
    ),
    withAuthRedirect
)(UsersContainer)