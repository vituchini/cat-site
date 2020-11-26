import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";


let mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}

const SuperMyPostsContainer = connect(
    mapStateToProps,
    {
        addPost
}
)(MyPosts)

export default SuperMyPostsContainer