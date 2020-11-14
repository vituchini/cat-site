import React from 'react';
import s from './../Messages.module.css'

const MessagesItems = (props) => {

    return (
        <div className={s.message}>
            {props.messageText}
        </div>
    )
}
export default MessagesItems
