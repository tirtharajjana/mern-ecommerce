import { combineReducers } from "redux";
import categoryReducre from './category.reducre';

const rootReducre = combineReducers({

  category: categoryReducre,

})

export default rootReducre;