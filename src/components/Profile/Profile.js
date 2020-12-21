import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";

function Profile({profile,status,updateStatus}) {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>)
}

export default Profile