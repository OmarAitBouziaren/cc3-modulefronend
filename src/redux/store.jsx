import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import TodoReducer from "./TodoSlice"


const reducer = combineReducers({
    users: UserReducer,
    tache: TodoReducer,
});

const store = configureStore({reducer}); 


export default store; 