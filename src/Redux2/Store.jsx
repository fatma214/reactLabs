 
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CombinedReducer from './Reducers/CombinedReducer';
import { thunk } from 'redux-thunk';

export const myStore=createStore(CombinedReducer,composeWithDevTools(applyMiddleware(thunk)))