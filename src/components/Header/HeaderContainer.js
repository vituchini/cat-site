import React from 'react'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData, setUserDataSuccess} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        //     {withCredentials: true}
        // )
        //     .then(res => {
        //         if (res.data.resultCode === 0) {
        //             let {id, email, login} = res.data.data
        //             this.props.setUserDataSuccess(id, email, login)
        //         }
        //     })
        this.props.setUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps,
    {
        setUserData
    }
)(HeaderContainer)
