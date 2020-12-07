import React from "react";
import {Field} from "redux-form";
import {Input} from "../common/Form/FormControls";
import {requiredField} from "../../utils/validators/validators";
import s from '../common/Form/FormsControls.module.css'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'email'} placeholder={'Login'} component={Input} validate={[requiredField]}/>
        </div>
        <div>
            <Field name={'password'} type={'password'} placeholder={'Password'} component={Input}
                   validate={[requiredField]}/>
        </div>
        <div>
            <Field name={'remember'} component={Input} type={"checkbox"}/>remember me
        </div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}
export default LoginForm