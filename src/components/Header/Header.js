import React from 'react'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.svg"
const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.logo} alt={'logo'} src={logo}></img>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                    ? <div className={s.loginName}>
                            {props.login} - <button onClick={props.logout}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>

                }

            </div>
        </header>
    )
}

export default Header
