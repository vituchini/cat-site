import React from 'react'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.logo} alt={'logo'}
                 src='https://w7.pngwing.com/pngs/972/862/png-transparent-patrick-of-sponge-bob-patrick-star-internet-meme-know-your-meme-paddy-cartoon-meme-fictional-character.png'></img>
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
