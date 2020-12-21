import React from "react";
import {CreateField, Input} from "../common/Form/FormControls";
import {requiredField} from "../../utils/validators/validators";
import s from '../common/Form/FormsControls.module.css'

const LoginForm = ({handleSubmit,error}) => {
    return <form onSubmit={handleSubmit}>

            {CreateField('Login','email',[requiredField],Input)}
            {CreateField('Password','password',[requiredField],Input,{type:'password'})}
            {CreateField(null,'remember',null,Input,{type:'checkbox'},'Remember Me')}

        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}
export default LoginForm