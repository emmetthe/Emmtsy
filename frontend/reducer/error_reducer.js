import { combineReducers } from 'redux';
import productErrorsReducer from './product_error_reducer';
import reviewErrorsReducer from './review_errors_reducer';
import sessionErrorsReducer from './session_error_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  products: productErrorsReducer,
  reviews: reviewErrorsReducer
});

export default errorsReducer;
