import {combineReducers} from "redux";
import {productReducer} from "./producReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
});