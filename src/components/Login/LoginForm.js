import React from "react";
import {Field} from "redux-form";

const LoginForm = (props) => {
 return <form onSubmit={props.handleSubmit}>
         <div>
             <Field name={'login'} placeholder={'Login'} component={'input'}/>
         </div>
         <div>
             <Field name={'password'} placeholder={'Password'} component={'input'}/>
         </div>
         <div>
             <Field name={'remember'} component={'input'} type={"checkbox"}/>remember me
         </div>
         <div>
           <button>Login</button>
         </div>
     </form>
}
export default LoginForm