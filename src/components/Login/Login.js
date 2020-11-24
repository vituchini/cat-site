import React from "react";
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
    }
    return <div>
        <h1 style={{color: "orange"}}>LOGIN PLZ</h1>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
}

export default Login