import { combineReducers } from "redux";
import categoryReducre from './category.reducer';
import productReducre from './product.reducer';

const rootReducre = combineReducers({

  category: categoryReducre,
  product: productReducre

})

export default rootReducre;