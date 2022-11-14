import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductsReducer } from "./Products/reducer";
import { cartReducer as AshishReducer } from "./Cartredux/cartreducer";
const rootReducer = combineReducers({ ProductsReducer, AshishReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
