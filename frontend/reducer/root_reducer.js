import { combineReducers } from "redux";
import entitiesReducer from './entities_reducer';
import sessionsReducer from './session_reducer';
import errorsReducer from './error_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionsReducer,
  modal: modalReducer,
})

export default rootReducer;