import { FETCH_ALL_CART_ITEMS, CREATE_CART_ITEM, DELETE_CART_ITEM, UPDATE_CART_ITEM } from "../action/cart_action";

const cartReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type){
    case FETCH_ALL_CART_ITEMS:
      return action.cartItems;
    case CREATE_CART_ITEM:
      nextState[action.cartItem.id] = action.cartItem
      return nextState;
    case DELETE_CART_ITEM:
      delete nextState[action.cartItemId]
      return nextState;
    default:
      return state;
  }
}

export default cartReducer;