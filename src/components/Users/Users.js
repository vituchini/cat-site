import React from "react";

import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, pageSize, currentPagesBox, totalUsersCount, setCurrentPagesBox, OnPageChanger, followingInProgress, follow, unFollow, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} pageSize={pageSize} currentPagesBox={currentPagesBox}
                   setCurrentPagesBox={setCurrentPagesBox} OnPageChanger={OnPageChanger}
                   totalUsersCount={totalUsersCount}/>
        {props.users.map(u => <User user={u} followingInProgress={followingInProgress} follow={follow} unFollow={unFollow}/>)}
    </div>
}

export default Users