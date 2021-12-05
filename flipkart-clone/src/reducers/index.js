import { combineReducers } from "redux";
import categoryReducre from './category.reducer';
import productReducre from './product.reducer';
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
const rootReducre = combineReducers({

  category: categoryReducre,
  product: productReducre,
  auth: authReducer,
  cart: cartReducer

})

export default rootReducre;