import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unFollow}) => {
    let u = user
    return (<div>
        <div key={u.id}>
            <span>
                <NavLink to={'/profile/' + u.id} activeClassName={s.active}>
                    <img className={s.usersPhoto}
                         src={u.photos.small != null
                             ? u.photos.small
                             : "https://prm.ua/wp-content/uploads/2019/02/50766681_285739525440896_2458080093832029354_n.jpg"
                            }
                         alt=""
                    />
                </NavLink>
                <div>
                    {u.followed
                        ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {unFollow(u.id)}}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <div>{u.name}</div>
                <div>{u.status ? u.status : 'Де мій статус?'}</div>
            </span>

        </div>

    </div>)
}


export default User