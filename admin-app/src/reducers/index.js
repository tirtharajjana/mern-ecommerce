import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducre from './user.reducre';
import productReducre from './product.reducre';
import orderReducre from './order.reducre';
import categoryReducre from './category.reducre';

const rootReducre = combineReducers({
  auth: authReducer,
  user: userReducre,
  category: categoryReducre,
  order: orderReducre,
  product: productReducre
})

export default rootReducre;