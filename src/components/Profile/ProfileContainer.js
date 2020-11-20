import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from '../../redux/profile-reducer'
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.setUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//     =(props)=>{
//     if (!props.isAuth) return <Redirect to={'/login'}/>
//     return <ProfileContainer {...props}/>
// }
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile
})
export default compose(
    connect(mapStateToProps,
        {
            setUserProfile
        }),
        withRouter,
        withAuthRedirect)
(ProfileContainer)