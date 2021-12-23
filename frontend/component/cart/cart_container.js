import { connect } from 'react-redux';
import { fetchCartItems, createCart, deleteCartItem, updateCartItem } from '../../action/cart_action';
import CartIndex from './cart_index';
import { fetchAllProducts } from '../../action/product_actions';
import { openModal, closeModal } from '../../action/modal_action';
import React from 'react';

const mSTP = (state, ownProps) => {
  return {
  cart: Object.values(state.entities.cart),
  user: state.session.id,
  products: Object.values(state.entities.products),
  isModal: state.ui.modal
  }
};

const mDTP = (dispatch) => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
  createCart: (cartItem) => dispatch(createCart(cartItem)),
  deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
  updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  openModal: () => dispatch(openModal("Checkout")),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(CartIndex);
