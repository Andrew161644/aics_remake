import {useHeader} from "./header_provider";
import {useBankPage} from "../mainField/bank_page/bank_page_provider";

export const LOGIN_STATE = "login"
export const COMPANY_STATE = "company"
export const BANK_ACCOUNTS_STATE = "accounts"
export const REGISTRATION_STATE = "registration"
export const LOGOUT_STATE = "registration"

function GetHeader(){
    const pageObj =  useHeader();
    const bankPage = useBankPage()

    return(
        <ul>
            <li onClick={() => pageObj.changePage(LOGIN_STATE)}>Логин</li>
            <li onClick={() => pageObj.changePage(REGISTRATION_STATE)}>Регистрация</li>
            <li onClick={() =>{
                bankPage.changeAcc(null)
                pageObj.changePage(BANK_ACCOUNTS_STATE)}}
            >Счета</li>
            <li onClick={() => pageObj.changePage(COMPANY_STATE)}>Компания</li>
            <li onClick={() => pageObj.changePage(LOGOUT_STATE)}>Выйти</li>
        </ul>
    )
}

export default GetHeader