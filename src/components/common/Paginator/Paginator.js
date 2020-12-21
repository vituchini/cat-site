import React from "react";
import s from './Paginator.module.css'


let Paginator = ({setCurrentPagesBox, currentPagesBox, totalUsersCount, pageSize, currentPage, OnPageChanger}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={s.pagesBar}>
            <span onClick={() => setCurrentPagesBox(currentPagesBox - 10)}> &#60;&#60; </span>
            <span onClick={() => setCurrentPagesBox(currentPagesBox - 1)}> &#60; </span>

            {pages.slice(currentPagesBox * 10 - 10, currentPagesBox * 10).map(p => {
                return <span
                    onClick={() => OnPageChanger(p)}
                    className={(p === currentPage) ? s.selectedPage : ''}> {p} </span>
            })}

            <span onClick={() => {
                let predictablePagesBox = pages.find(e => e === ((currentPagesBox * 10) + 1))
                if (predictablePagesBox) {
                    setCurrentPagesBox(currentPagesBox + 1)
                }
            }}> &#62; </span>
            <span onClick={() => {
                let predictablePagesBox = pages.find(e => e === ((currentPagesBox + 10) * 10))
                if (predictablePagesBox) {
                    setCurrentPagesBox(currentPagesBox + 10)
                }
            }}> &#62;&#62; </span>
        </div>

    </div>
}


export default Paginator