import { FETCH_ALL_CART_ITEMS, CREATE_CART_ITEM, DELETE_CART_ITEM, ADD_CART_ITEM } from '../action/cart_action';

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case FETCH_ALL_CART_ITEMS:
      return action.cartItems;
    case ADD_CART_ITEM:
      // if (action.cartItem.product_id in state) {
      //   let nextState = Object.assign({}, state);
      //   nextState[action.cartItem.product_id].quantity = state[action.cartItem.product_id].quantity + 1;
      //   return nextState;
      // }
    return Object.assign({}, state, { [action.cartItem.id]: action.cartItem } );
    case DELETE_CART_ITEM:
      delete nextState[action.cartItemId];
      return nextState;
    default:
      return state;
  }
};

export default cartReducer;
