import { combineReducers } from "redux";
import cartReducer from "./cart_reducer";
import categoryReducer from "./category_reducer";
import productReducer from "./product_reducer";
import reviewReducer from "./review_reducer";
import usersReducer from './users_reducer';
import categoryProductReducer from "./category_product_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  cart: cartReducer,
  categories: categoryReducer,
  categoryProduct: categoryProductReducer,
  reviews: reviewReducer
});

export default entitiesReducer;