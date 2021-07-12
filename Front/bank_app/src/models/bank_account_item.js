import React from "react";
import BankAccountItem from "./bank_account_item";
import {useQuery} from "@apollo/client";
import {EXCHANGE_RATES} from "../graphQL/query";


function Bank_account_list() {

    /*const { loading, error, data } = useQuery(EXCHANGE_RATES);*/
    const data = [
        {Title:"title", Value:"value", Currency: "$"},
        {Title:"title2", Value:"value2", Currency: "$"},
        {Title:"title2", Value:"value2", Currency: "$"},
    ];

    return (
        <ul>
            {data.map((acc, index) => {
                return (
                    <BankAccountItem account={acc} key={acc.Id} index={index}/>
                )
            })}
        </ul>
    );
}


export default Bank_account_list


