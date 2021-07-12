import React from 'react'
import style from "../profile/profile.module.css"
import { useHeader, useState } from "../../header/header_provider";
import AccountItem from "../AccountItem/accountItem";
import {addAccountActionCreator, updateNewAccountTextActionCreator} from "../../../redux/profile_reducer";

function Profile(props){
    debugger;
    let accountelemnts=props.profilePage.accounts.map(account=>  <AccountItem id={account.id} title={account.Title} value={account.Value} curency={account.Currency}/>);
    let newAccountElement= React.createRef();

    let addAccount =()=>{
        props.dispatch(addAccountActionCreator());
        props.dispatch(updateNewAccountTextActionCreator(''));

    }
    let onInputAccountChange=()=>{
        let text=newAccountElement.current.value;
        props.dispatch(updateNewAccountTextActionCreator(text));
    }

    return(
            <div className={style.profile}>
               <div>
                   <h1>Привет, UserName!</h1>
               </div>
               <div className={style.mudrostdnya}>
                    Если вы сейчас читаете это, то...Ладно, неважно, в общем.
               </div>
               <div className={style.accounts}>
                   <h2>Ваши счета</h2>
                   <h3>{accountelemnts}</h3>
                    <input ref={newAccountElement} onChange={onInputAccountChange} value={props.profilePage.newAccountText}/>

                   <button onClick={addAccount}>Открыть новый счёт</button>

               </div>
            </div>
    )
}

export default Profile