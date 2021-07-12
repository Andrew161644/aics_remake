import React from 'react'
import style from "./accountItem.module.css"
import { NavLink } from "react-router-dom";

const AccountItem =(props)=>{
    return <div className={style.account}>
        <NavLink to={"/main/account/"+ props.id} activeClassName={style.active}>{props.title}</NavLink>
    </div>
}

export default AccountItem