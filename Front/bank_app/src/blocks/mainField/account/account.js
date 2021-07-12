import React from 'react'
import style from "./account.module.css"
import cardpng from "./card.png"
import AccountItem from "../AccountItem/accountItem";

function Account(props) {
    return (

        <div className={style.account}>
            {/* <h1>{props.name}</h1>
            <p>{props.full}</p> */}
            <div className={style.card}>
                <img src={cardpng}/>
                <div className={style.topleft}>
                    25 420
                </div>
               <div className={style.topright}>
                    RUB
                </div>
                <div className={style.bottomleft}>
                    1111 2222 3333 4444
                </div>
            </div>
            <div>
                <h1>Пополнение</h1>
            </div>

            <div>
                <h1>Перевод</h1>
            </div>

        </div>

    )
}

export default Account