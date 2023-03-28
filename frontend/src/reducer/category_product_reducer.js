import { RECEIVE_CATEGORY } from '../action/category_action';

const categoryProductReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORY:
      return action.products;
    default:
      return state;
  }
};

export default categoryProductReducer;