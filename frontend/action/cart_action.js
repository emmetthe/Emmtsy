import * as CartUtil from '../util/cart_util';

export const FETCH_ALL_CART_ITEMS = 'FETCH_ALL_CART_ITEMS';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

const fetchCart = (cartItems) => ({
  type: FETCH_ALL_CART_ITEMS,
  cartItems
});

const createCartItem = (cartItem) => {
  return {
    type: ADD_CART_ITEM,
    cartItem
  };
};

const addCartItem = (cartItem) => {
  return {
    type: ADD_CART_ITEM,
    cartItem
  };
};

const removeCartItem = (cartItemId) => ({
  type: DELETE_CART_ITEM,
  cartItemId
});

export const fetchCartItems = (cartItems) => (dispatch) => 
CartUtil.fetchCart()
.then((cartItems) => {
  console.log('6', cartItems)
  dispatch(fetchCart(cartItems))})
;

export const createCart = (cartItem) => (dispatch) => {
  console.log('1', cartItem);
  CartUtil.createCartItem(cartItem).then((cartItem) => {
    console.log('2', cartItem);
    dispatch(createCartItem(cartItem));
  });
};

export const deleteCartItem = (cartItemId) => (dispatch) =>
  CartUtil.deleteCartItem(cartItemId).then(() => dispatch(removeCartItem(cartItemId)));

export const updateCartItem = (cartItem) => (dispatch) =>
  CartUtil.updateCartItem(cartItem).then((cartItem) => dispatch(addCartItem(cartItem)));
