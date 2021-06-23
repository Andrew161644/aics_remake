import React from "react";

function GetBankAccount(props){
    return (<div>{props.acc.GetTitle} {props.acc.GetValue} {props.acc.GetCurrency}</div>)
}

export default GetBankAccount