// import React from 'react'
// import style from "../profile/profile.module.css"
// import { useHeader, useState } from "../../header/header_provider";
// import AccountItem from "../AccountItem/accountItem";
// import {addAccountActionCreator, updateNewAccountTextActionCreator} from "../../../redux/profile_reducer";
// import Profile from "./profile";
//
// function ProfileContainer(props){
//     debugger;
//     let accountelemnts=props.profilePage.accounts.map(account=>  <AccountItem id={account.id} title={account.Title} value={account.Value} curency={account.Currency}/>);
//     let newAccountElement= React.createRef();
//
//     let addAccount =()=>{
//         props.dispatch(addAccountActionCreator());
//         props.dispatch(updateNewAccountTextActionCreator(''));
//
//     }
//     let onInputAccountChange=()=>{
//         let text=newAccountElement.current.value;
//         props.dispatch(updateNewAccountTextActionCreator(text));
//     }
//
//     return(
//         <Profile/>
//     )
// }
//
// export default ProfileContainer