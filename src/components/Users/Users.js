import React from "react";
import s from './Users.module.css'
import {NavLink, Redirect} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.pagesBar}>
            {pages.map(p => {
                return <span onClick={() => props.OnPageChanger(p)}
                             className={(p === props.currentPage) ? s.selectedPage : ''}>|{p}|</span>
            })}
        </div>

        {props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'/profile/' + u.id} activeClassName={s.active}>
                        <img
                            className={s.usersPhoto}
                            src={
                                u.photos.small != null
                                    ? u.photos.small
                                    : "https://avatars.mds.yandex.net/get-zen_doc/3512693/pub_5efb3ff066fe1d5006536937_5efb4be4cdd4d637ce0fd2e8/scale_1200"
                            }
                            alt=""
                        />
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={props.follwingInProgress.some(id => id === u.id)} onClick={() => {

                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.follwingInProgress.some(id => id === u.id)} onClick={() => {
                                // props.toggleFollowingProgress(true, u.id)
                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                //     {
                                //         withCredentials: true,
                                //         headers: {
                                //             "API-KEY": "6fdc5189-693b-4a05-abe8-85419120110e"
                                //         }
                                //     }
                                // )
                                //     usersAPI.follow(u.id).then(res => {
                                //         if (res.data.resultCode === 0) {
                                //             props.follow(u.id)
                                //
                                //         }
                                //         props.toggleFollowingProgress(false, u.id)
                                //     })
                                props.follow(u.id)
                            }}>Follow</button>}
                            </div>
                            </span>
            <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
            <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                            </span>
        </div>)}
    </div>
}


export default Users