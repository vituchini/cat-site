import React from 'react';
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className={s.ProfileInfoBlock}>
            <div>
                <img className={s.userWallpaper} src="https://www.ubackground.com/_ph/17/10154132.jpg" alt=""/>
            </div>
            <div>
                <img className={s.avatar}
                     src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f7/f7e50892cf0750e53d05776850361eb67eb641f1_full.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+opis
            </div>
        </div>)
}

export default ProfileInfo