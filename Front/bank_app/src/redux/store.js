// import profileReducer from "./profile_reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             accounts: [
//                 {id: 1, Title: "5321 0089 5423 1584", Value: "value", Currency: "$"},
//                 {id: 2, Title: "5321 5847 1122 0025", Value: "value2", Currency: "$"},
//                 {id: 3, Title: "5321 7754 4655 2555", Value: "value3", Currency: "$"}
//             ],
//             users: [
//                 {id: 1, name: "Fidan"},
//                 {id: 2, name: "Andrew"}
//             ],
//             newAccountText: ""
//         }
//
//     },
//     _callSubscriber() {
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action){
//         this._state=profileReducer(this._state,action);
//             this._callSubscriber(this._state);
//
//     }
//
// }
//
// export default store