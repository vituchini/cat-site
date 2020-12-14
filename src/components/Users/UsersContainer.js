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
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        document.title = "Users"
    }

    OnPageChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)

    }


    render() {

        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users {...this.props} OnPageChanger={this.OnPageChanger}/>
            }

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        currentPagesBox: getCurrentPagesBox(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
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