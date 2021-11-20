import { combineReducers } from "redux";
import entitiesReducer from './entities_reducer';
import sessionsReducer from './session_reducer';
import errorReducer from './error_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionsReducer,
  error: errorReducer
})

export default rootReducer;