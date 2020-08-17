import React from 'react';
import s from './Post.module.css'

function Post(props) {
    return (
        <div>
            <div className={s.item}>
                <div className={s.avatar}>
                    <img src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f7/f7e50892cf0750e53d05776850361eb67eb641f1_full.jpg'></img>
                </div>
                <div className={s.message}>{props.message}</div>
            </div>
            <span>like</span>{props.likesCount}
        </div>)
}

export default Post