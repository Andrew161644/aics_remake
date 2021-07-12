import { useHeader } from "./header_provider";
import { useBankPage } from "../mainField/bank_page/bank_page_provider";
import styles from './header.module.css'
import { NavLink } from "react-router-dom";

export const LOGIN_STATE = "login"
export const COMPANY_STATE = "company"
export const BANK_ACCOUNTS_STATE = "accounts"
export const REGISTRATION_STATE = "registration"
export const LOGOUT_STATE = "registration"

function GetHeader() {
    const pageObj = useHeader();
    const bankPage = useBankPage()

    return (

        <div className={styles.header}>
            <div ><img className={styles.logo} src="https://image.flaticon.com/icons/png/512/4914/4914236.png" /></div>
            <div className={styles.button}><NavLink to="/main" activeClassName={styles.active}>Главная</NavLink></div>
            <div className={styles.button} onClick={() => pageObj.changePage(LOGIN_STATE)}>Логин</div>
            <div className={styles.button} onClick={() => pageObj.changePage(REGISTRATION_STATE)}>Регистрация</div>
                {/*pageObj.changePage(BANK_ACCOUNTS_STATE)*/}
            <div className={styles.button} onClick={() => {
                bankPage.changeAcc(null)
            }}
            >Счета</div>
            <div className={styles.button} onClick={() => pageObj.changePage(COMPANY_STATE)}><NavLink to="/company" activeClassName={styles.active}>Компания</NavLink></div>
            <div className={styles.button} onClick={() => pageObj.changePage(LOGOUT_STATE)}>Выйти</div>

        </div>
    )
}

export default GetHeader