import React from 'react';
import s from './Messages.module.css'
import DialogItems from './DialogItems/DialogItems'
import MessagesItems from './MessagesItems/MessagesItems'

const Messages = (props) => {
    let dialogsElement = props.dialogsData.map(d => <DialogItems DialogName={d.name} id={d.id}/>)
    let messagesElements = props.messagesData.map(m => <MessagesItems messageText={m.message}/>)


    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {/*<DialogItems DialogName='Jopa' id='1'/>*/}
                {/*<DialogItems DialogName='Yaiki' id='2'/>*/}
                {/*<DialogItems DialogName='Sasha' id='3'/>*/}
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {/*<MessageItems messageText='fuk'/>*/}
                {/*<MessageItems messageText='fukk'/>*/}
                {/*<MessageItems messageText='fukk u'/>*/}
                {messagesElements}
            </div>
        </div>
    )
}
export default Messages
