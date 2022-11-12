import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as ProductsReducer} from "./Products/reducer"

const rootReducer =ProductsReducer

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
