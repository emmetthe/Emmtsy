import { combineReducers } from 'redux';
import productErrorsReducer from './product_error_reducer';
import sessionErrorsReducer from './session_error_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  products: productErrorsReducer,
});

export default errorsReducer;