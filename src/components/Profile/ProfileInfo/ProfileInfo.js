import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    return (

        <div className={s.ProfileInfoBlock}>
            <div>
                {!props.profile.photos.small
                && <img className={s.avatar} src="https://prm.ua/wp-content/uploads/2019/02/50766681_285739525440896_2458080093832029354_n.jpg" alt=""/>
                }
                {props.profile.photos.small
                && <img className={s.avatar} src={props.profile.photos.small} alt=""/>
                }
                {props.profile.photos.large
                && <img className={s.avatar} src={props.profile.photos.large} alt=""/>
                }
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>)
}

export default ProfileInfo