import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS, RECEIVE_REVIEW_ERRORS } from '../action/review_action';

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return [];
    case REMOVE_REVIEW:
      return [];
    case RECEIVE_REVIEWS:
      return [];
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default reviewErrorsReducer;
