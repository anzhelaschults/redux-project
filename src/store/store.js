import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {RootReducer} from "./rootReducer"


export const store = createStore(RootReducer, applyMiddleware(thunk, logger))