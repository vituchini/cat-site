import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
        props.updateNewPostText('')
    }
    let onNewPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.PostsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onNewPostChange} ref={newPostElement} value={props.newPostText}/>
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