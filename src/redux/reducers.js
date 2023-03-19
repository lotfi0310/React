import { combineReducers } from "redux";
import productsSlice from "./slices/productsSlice";



const rootreducer= combineReducers(
    {
        products:productsSlice
        
    }
)
export default rootreducer;
