import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, REMOVE_SESSION_ERRORS, RECEIVE_SESSION_ERRORS } from '../action/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case REMOVE_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};
