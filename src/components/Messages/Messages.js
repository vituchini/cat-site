import React from 'react';
import s from './Messages.module.css'
import DialogItems from './DialogItems/DialogItems'
import MessagesItems from './MessagesItems/MessagesItems'
import {Redirect} from "react-router-dom";

const Messages = (props) => {

    let dialogsElement = props.dialogsData.map(d => <DialogItems DialogName={d.name} id={d.id}/>)
    let messagesElements = props.messagesData.map(m => <MessagesItems messageText={m.message}/>)

    let onNewMessageChange = (event) => {
        let text = event.target.value
        props.onNewMessageChange(text)
    }
    let sendMessage = () => {
        props.sendMessage()
    }
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea
                    placeholder='Write ur message!'
                    onChange={onNewMessageChange}
                    value={props.newMessageText}
                />
                <button onClick={sendMessage}>
                    SEND
                </button>
            </div>

        </div>
    )
}
export default Messages
