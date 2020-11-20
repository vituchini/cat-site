import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    return (
        <div className={s.ProfileInfoBlock}>
            <div>
                <img className={s.avatar} src={props.profile.photos.small} alt=""/>
                <img className={s.avatar} src={props.profile.photos.large} alt=""/>
            </div>
            <ProfileStatus status={'Hello'}/>
        </div>)
}

export default ProfileInfo