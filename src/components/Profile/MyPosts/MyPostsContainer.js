import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";



function MyPostsContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                //     let state = store.getState().profilePage
                //
                //     let dispatch = store.dispatch
                //
                //     let addPost = () => {
                //         store.dispatch(addPostActionCreator())
                //     }
                //     let onNewPostChange = (text) => {
                //         store.dispatch(updateNewPostTextActionCreator(text))
                //     }

                    return <MyPosts
                        // addPost={addPost}
                        // onNewPostChange={onNewPostChange}
                        // postsData={state.posts}
                        // NewPostText={state.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )


}


let mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}
let mapDispatchToProps = (dispatch) => {

    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onNewPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default SuperMyPostsContainer