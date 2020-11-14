import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer"
import Messages from "./Messages";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// const MessagesContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().messagesPage
//
//                     let dispatch = store.dispatch
//
//                     let onNewMessageChange = (text) => {
//                         store.dispatch(updateNewMessageTextActionCreator(text))
//                     }
//                     let sendMessage = () => {
//
//                         store.dispatch(sendMessageActionCreator())
//                     }
//                     return <Messages
//                         dialogsData={state.dialogsData}
//                         messagesData={state.messagesData}
//                         newMessageText={state.newMessageText}
//                         onNewMessageChange={onNewMessageChange}
//                         sendMessage={sendMessage}
//                     />
//                 }
//             }
//
//         </StoreContext.Consumer>
//
//     )
// }


let mapStateToProps = (state) => {

    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
        // isAuth: state.auth.isAuth
    }
}
//
// compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect
// )(Messages)

// let MessagesRedirectComponent = withAuthRedirect(Messages)
//     =(props)=>{
//     if (!props.isAuth) return <Redirect to={'/login'}/>
//     return <Messages {...props}/>
// }

let mapDispatchToProps = (dispatch) => {

    return {
        onNewMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
// const SuperMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesRedirectComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)
