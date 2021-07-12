import React from 'react'
import { useHeader, useState } from "../header/header_provider";
import style from "../mainField/main.module.css"
import Account from "./account/account"
import Profile from "./profile/profile"
import {updateNewAccountText} from "../../redux/store";

function GetMain(props) {
    const menuOption = useHeader();

    return (
        <div className={style.wrapper}>

            <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}  />

            <Account />

            {menuOption.page}
        </div>
    )
}

export default GetMain