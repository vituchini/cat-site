import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (<nav className={s.nav}>
        <div>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>

        </div>
    </nav>)
}

export default Navbar