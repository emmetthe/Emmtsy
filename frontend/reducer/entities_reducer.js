import { combineReducers } from "redux";
import cartReducer from "./cart_reducer";
import categoryReducer from "./category_reducer";
import productReducer from "./product_reducer";
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  cart: cartReducer,
  categories: categoryReducer,
});

export default entitiesReducer;