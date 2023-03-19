import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import rootreducer from "./reducers";
let configPersist = {
  key:'root',
  storage
}
const persistor = persistReducer(configPersist,rootreducer)
export default configureStore({reducer:persistor,middleware:[thunk,logger]});