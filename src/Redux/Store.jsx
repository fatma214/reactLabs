import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CombinedReducers from "./Reducers/CombinedReducers";




const myStore =createStore(CombinedReducers,composeWithDevTools());

export default myStore;