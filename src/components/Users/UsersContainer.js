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
                : <Users {...this.props} OnPageChanger={this.OnPageChanger} />
            }

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        currentPagesBox: state.usersPage.currentPagesBox,
        isFetching: state.usersPage.isFetching,
        follwingInProgress:state.usersPage.follwingInProgress,
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