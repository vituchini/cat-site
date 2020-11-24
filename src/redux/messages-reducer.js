
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Jorik'},
        {id: 2, name: 'Yana'},
        {id: 3, name: 'Sasha'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Haha'},
        {id: 3, message: 'Sho?'}
    ]
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {

            if (action.newMessage) return {
                ...state,
                messagesData: [...state.messagesData,
                    {
                        id: state.messagesData.length + 1,
                        message: action.newMessage
                    }],
            }

        }
        default:
            return state
    }
}
export const sendMessage = (newMessage) => ({type: SEND_MESSAGE, newMessage})

export default messagesReducer