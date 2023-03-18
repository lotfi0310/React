import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
  key: 'root',
  storage,
};
const persistor = persistReducer(persistConfig,rootReducer);
const store = configureStore({
  reducer: persistor,
  middleware: [thunkMiddleware]
});

export default store;
