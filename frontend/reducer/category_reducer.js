import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../action/category_action';

const categoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default categoryReducer;
