import React from "react";
import PropTypes from "prop-types";
import BankAccountItem from "./bank_account_item";
import {useQuery} from "@apollo/client";
import {EXCHANGE_RATES} from "../graphQL/query";


function Bank_account_list() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {data.bankAccounts.map((acc, index) => {
                return (
                    <BankAccountItem account={acc} key={acc.GetId} index={index}/>
                )
            })}
        </div>
    );
}


export default Bank_account_list



