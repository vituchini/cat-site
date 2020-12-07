import React from "react";
import LoginForm from "./LoginForm.jsx";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginFormRedux = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remember)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN PLZ</h1>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)