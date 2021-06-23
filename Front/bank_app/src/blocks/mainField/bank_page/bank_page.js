import React, {useCallback} from "react";
import BankAccountList from "../../../models/bank_account_list";
import {useBankPage} from "./bank_page_provider";
import GetBankAccount from "../../../models/bank_account";

function GetBankPage() {
    const acc = useBankPage().acc

    if (acc === null) {
        return (
            <div className="App">
                <BankAccountList/>
            </div>
        );
    } else {
        return (
            <div className="App">
                <GetBankAccount acc={acc}/>
            </div>
        );
    }
}


export default GetBankPage