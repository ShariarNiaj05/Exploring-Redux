import { createStore } from "redux";
import { thunk } from "redux-thunk";
import toDosReducers from "../Services/Reducers/toDosReducers";
import { applyMiddleware } from "redux";


const store = createStore(toDosReducers, applyMiddleware(thunk))


export default store;