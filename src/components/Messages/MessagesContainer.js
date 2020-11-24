import React from 'react';
import {sendMessage} from "../../redux/messages-reducer"
import Messages from "./Messages";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {

    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
    }
}

export default compose(
    connect(mapStateToProps, {
        sendMessage
    }),
    withAuthRedirect
)(Messages)
