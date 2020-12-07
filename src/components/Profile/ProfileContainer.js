import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer'
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        document.title = "Profile"
        let userId = this.props.match.params.userId
        if (!userId) {
            debugger
            userId = this.props.currentUserId;
        }
        this.props.setUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (

            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    currentUserId:state.auth.id,
    profile: state.profilePage.profile,
    status:state.profilePage.status
})
export default compose(
    connect(mapStateToProps,
        {
            setUserProfile,
            getStatus,
            updateStatus,
        }),
    withRouter,
    withAuthRedirect)
(ProfileContainer)