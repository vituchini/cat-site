import React from 'react';
import s from './../Messages.module.css'
import {NavLink} from 'react-router-dom'

const DialogItems = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/messages/${props.id}`} activeClassName={s.active}>{props.DialogName}  </NavLink>
        </div>
    )
}

export default DialogItems
