import React from 'react';
import s from './Messages.module.css'
import DialogItems from './DialogItems/DialogItems'
import MessagesItems from './MessagesItems/MessagesItems'
import {Field, reduxForm} from "redux-form";

const Messages = (props) => {

    let dialogsElement = props.dialogsData.map(d => <DialogItems DialogName={d.name} id={d.id}/>)
    let messagesElements = props.messagesData.map(m => <MessagesItems messageText={m.message}/>)

    let sendMessage = (value) => {
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={sendMessage}/>
            </div>

        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">
            <Field component={'textarea'} name={'newMessageBody'} placeholder='Write ur message!'/>
            <button>SEND</button>
        </form>)
}
const AddMessageFormRedux = reduxForm({form: 'addMessageForm'})(AddMessageForm)
export default Messages
