import PropTypes, { func } from "prop-types";
import React from "react";
import {useBankPage} from "../blocks/mainField/bank_page/bank_page_provider";


function BankAccountItem({account, index}){
    const bankPage = useBankPage()
    return (
        <li onClick={() => bankPage.changeAcc(account)}>
            {index} {account.GetTitle} {account.GetValue} {account.GetCurrency}
        </li>
    );
}
BankAccountItem.propTypes ={
    account: PropTypes.object.isRequired,
    index: PropTypes.number,
}
export default BankAccountItem;