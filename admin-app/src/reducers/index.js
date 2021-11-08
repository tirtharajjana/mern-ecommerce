import { combineReducers } from "redux";
import authReducer from "./auth.reducer";

const rootReducre = combineReducers({
  auth: authReducer
})

export default rootReducre;