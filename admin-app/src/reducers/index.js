import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducre from './user.reducre'

const rootReducre = combineReducers({
  auth: authReducer,
  user: userReducre
})

export default rootReducre;