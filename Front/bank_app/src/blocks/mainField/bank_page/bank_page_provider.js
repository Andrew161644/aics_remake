import React, {useContext, useState} from "react";

const BankPageContext = React.createContext()
export const useBankPage = () => {
    return useContext(BankPageContext)
}


export const BankPageProvider = ({children}) => {
    const [acc, setAcc] = useState(null)
    const changeAcc = (acc) =>{
/*        console.log(acc)*/
        setAcc(acc)
    }
    return (
        <BankPageContext.Provider value={{
            acc: acc,
            changeAcc: changeAcc,
        }}>
            {children}
        </BankPageContext.Provider>
    )
}