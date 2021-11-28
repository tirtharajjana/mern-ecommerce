import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducre from './user.reducer';
import productReducre from './product.reducer';
import orderReducre from './order.reducer';
import categoryReducre from './category.reducer';
import pageReducer from './page.reducer'

const rootReducre = combineReducers({
  auth: authReducer,
  user: userReducre,
  category: categoryReducre,
  order: orderReducre,
  product: productReducre,
  page: pageReducer
})

export default rootReducre;