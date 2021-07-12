import {combineReducers, createStore} from "redux"
import profileReducer from "./profile_reducer";
let reducers = combineReducers({
    profilePage:profileReducer
});

let store = createStore(reducers);

export default store;