import React, {useContext, useState} from "react";
import {LOGIN_STATE, COMPANY_STATE, BANK_ACCOUNTS_STATE} from "./header";
import GetBankPage from "../mainField/bank_page/bank_page";
import GetCompany from "../../models/company";
import GetLogin from "../mainField/login";



const HeaderContext = React.createContext()
export const useHeader = () => {
    return useContext(HeaderContext)
}

const getPage = (page) => {
    switch (page){

        case LOGIN_STATE:
            return (<GetLogin/>)
        case COMPANY_STATE:
            return (<GetCompany/>)
        case BANK_ACCOUNTS_STATE:
            return (<GetBankPage/>)

        default: return (<div>Noting to show</div>)
    }
}

export const HeaderProvider = ({children}) => {
    const [pageName, setPageName] = useState(LOGIN_STATE)
    const [page, setPage] = useState(<div>Login</div>)

    const changePage = (pageName) => {
        setPage(getPage(pageName))
        setPageName(pageName)
    }

    return (
        <HeaderContext.Provider value={{
            pageName: pageName,
            page: page,
            changePage: changePage,
        }}>
            {children}
        </HeaderContext.Provider>
    )
}