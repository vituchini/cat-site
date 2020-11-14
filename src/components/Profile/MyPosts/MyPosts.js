import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"



function MyPosts(props) {
    let newPostElement = React.createRef()

    let addPost = () => {
        // props.dispatch(addPostActionCreator())
        props.addPost()
    }
    let onNewPostChange = (event) => {
        // props.dispatch(updateNewPostTextActionCreator(event.target.value))
        props.onNewPostChange(event.target.value)
    }

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.PostsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea placeholder='Ахаха шукай себе в дупах Дрогобича!' onChange={onNewPostChange} ref={newPostElement}  value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts