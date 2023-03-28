import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../action/product_actions';

const productReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      let nextState = Object.assign({}, state);
      nextState[action.product.id] = action.product;
      return nextState;
    case RECEIVE_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default productReducer;
