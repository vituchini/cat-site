import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {TextArea} from "../../common/Form/FormControls";

const maxLength30 = maxLengthCreator(30)

function MyPosts(props) {

    let addPost = (value) => {
        props.addPost(value.newPostBody)
    }

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.PostsBlock}>
            <h2>My posts</h2>

            <AppPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField,maxLength30]} component={TextArea} name={'newPostBody'}
                       placeholder={'Type ur message!'}/>
            </div>
            <div>
                <button>ADD POST</button>
            </div>
        </form>
    )
}
const AppPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm)
export default MyPosts