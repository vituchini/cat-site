import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.pagesBar}>
            <span onClick={() => props.setCurrentPagesBox(props.currentPagesBox - 10)}>|&#60;&#60;|</span>
            <span onClick={() => props.setCurrentPagesBox(props.currentPagesBox - 1)}>|&#60;|</span>

            {pages.slice(props.currentPagesBox * 10 - 10, props.currentPagesBox * 10).map(p => {
                return <span
                    onClick={() => props.OnPageChanger(p)}
                    className={(p === props.currentPage) ? s.selectedPage : ''}>|{p}|</span>
            })}

            <span onClick={() => {
                let predictablePagesBox = pages.find(e => e == ((props.currentPagesBox * 10)+1 ))
                if (predictablePagesBox) {
                    props.setCurrentPagesBox(props.currentPagesBox + 1)
                }
                // props.setCurrentPagesBox(props.currentPagesBox + 1)



            }}>|&#62;|</span>
            <span onClick={() => {
                let predictablePagesBox = pages.find(e => e == ((props.currentPagesBox + 10) * 10))
                if (predictablePagesBox) {
                    props.setCurrentPagesBox(props.currentPagesBox + 10)
                }
            }}>|&#62;&#62;|</span>
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