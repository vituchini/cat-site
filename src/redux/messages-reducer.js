const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Jopa'},
        {id: 2, name: 'Yaiki'},
        {id: 3, name: 'Sasha'}
    ],
    messagesData: [
        {id: 1, message: 'Lol'},
        {id: 2, message: 'Haha'},
        {id: 3, message: 'Sho?'}
    ],
    newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
    let stateCopy

    switch (action.type) {
        case SEND_MESSAGE: {
            let messageText = state.newMessageText
            stateCopy = {
                ...state,
                messagesData: [...state.messagesData,
                    {
                        id: state.messagesData.length + 1,
                        message: messageText
                    }],
                newMessageText: ''
            }
            // let newMessage = {
            //     id: stateCopy.messagesData.length + 1,
            //     message: stateCopy.newMessageText
            // }

            // stateCopy.messagesData.push(newMessage)
            // stateCopy.newMessageText = ''
            return stateCopy
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy = {
                ...state,
                newMessageText: action.newText
            }

            // stateCopy.newMessageText = action.newText
            return stateCopy
        }

        default:
            return state
    }
}
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default messagesReducer