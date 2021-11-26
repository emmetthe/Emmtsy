import { FETCH_ALL_CART_ITEMS, CREATE_CART_ITEM, DELETE_CART_ITEM, ADD_CART_ITEM } from '../action/cart_action';

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_ALL_CART_ITEMS:
      return action.cartItems;
    case ADD_CART_ITEM:
      console.log('4', state, action.cartItem.product_id)
      if (action.cartItem.product_id in state) {
        let nextState = Object.assign({}, state);
        nextState[action.cartItem.product_id].quantity = state[action.cartItem.product_id].quantity + 1;
        console.log(nextState, '3')
        return nextState;
      }
      return Object.assign({}, state, { [action.cartItem.product_id]: action.cartItem });
    case DELETE_CART_ITEM:
      let nextState = Object.assign({}, state);
      delete nextState[action.cartItemId];
      return nextState;
    default:
      return state;
  }
};

export default cartReducer;
