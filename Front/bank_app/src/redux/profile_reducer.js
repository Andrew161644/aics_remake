const UPDATE_NEW_ACCOUNT_TEXT = 'UPDATE-NEW-ACCOUNT-TEXT';
const ADD_ACCOUNT = 'ADD-ACCOUNT';

let initialProfile= {
    accounts: [
        {id: 1, Title: "5321 0089 5423 1584", Value: "value", Currency: "$"},
        {id: 2, Title: "5321 5847 1122 0025", Value: "value2", Currency: "$"},
        {id: 3, Title: "5321 7754 4655 2555", Value: "value3", Currency: "$"}
    ],
    users: [
        {id: 1, name: "Fidan"},
        {id: 2, name: "Andrew"}
    ],
    newAccountText: ""
}

const profileReducer=(state=initialProfile, action)=>{
    switch(action.type){
        case ADD_ACCOUNT:
            let newAccount = {
                id: String(state.accounts.length + 1),
                Title: state.newAccountText,
                Value: "value3",
                Currency: "$"
            };
            state.accounts.push(newAccount);
            return state;
        case UPDATE_NEW_ACCOUNT_TEXT:
            state.newAccountText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addAccountActionCreator=()=>{
    return{
        type: ADD_ACCOUNT
    }
}
export const  updateNewAccountTextActionCreator=(text)=>{
    return{
        type:UPDATE_NEW_ACCOUNT_TEXT, newText:text
    }
}

export default profileReducer;