import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    return (
        <div className={s.ProfileInfoBlock}>
                {/*<img className={s.userWallpaper} src="https://pw.artfile.me/wallpaper/24-08-2018/650x434/abstrakciya-vektornaya-grafika--grafika--1380218.jpg" alt=""/>*/}

            <div>
                <img className={s.avatar} src={props.profile.photos.small} alt=""/>
                <img className={s.avatar} src={props.profile.photos.large} alt=""/>
            </div>
            <ProfileStatus status={'Hello'}/>
        </div>)
}

export default ProfileInfo