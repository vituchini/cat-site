import rerenderEntireTree from './../render'

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Fuck U', likesCount: 20},
            {id: 2, message: 'Fuck I', likesCount: 2},
            {id: 3, message: 'Fuck All', likesCount: -1000}
        ],
        newPostText: 'Napishi Shota'
    }
    ,
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Jopa'},
            {id: 2, name: 'Yaiki'},
            {id: 3, name: 'Sasha'}
        ],
        messagesData: [
            {id: 1, message: 'Lol'},
            {id: 2, message: 'Haha'},
            {id: 3, message: 'Sho?'}
        ]
    }

}
export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state, addPost, updateNewPostText);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state, addPost, updateNewPostText);
}
export default state