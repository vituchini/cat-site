import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    getUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader'
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Messages from "../Messages/Messages";
import {compose} from "redux";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    OnPageChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
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

// let UserRedirectComponent = withAuthRedirect(UsersContainer)
//     =(props)=>{
//     if (!props.isAuth) return <Redirect to={'/login'}/>
//     return <UsersContainer {...props}/>
// }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        follwingInProgress:state.usersPage.follwingInProgress,
        // isAuth:state.auth.isAuth
    }
}

// export default connect(mapStateToProps,
//     {
//         follow,
//         unFollow,
//         setCurrentPage,
//         getUsers,
//     }
// )(UserRedirectComponent)

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            setCurrentPage,
            getUsers,
        }
    ),
    withAuthRedirect
)(UsersContainer)