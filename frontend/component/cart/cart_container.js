import { connect } from 'react-redux';
import { fetchCartItems, createCart, deleteCartItem, updateCartItem } from '../../action/cart_action';
import CartIndex from './cart_index';

const mSTP = (state, ownProps) => ({
  cart: Object.values(state.entities.cart),
  user: state.session.id,
});

const mDTP = (dispatch) => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
  createCart: (cartItem) => dispatch(createCart(cartItem)),
  deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
  updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
});

export default connect(mSTP, mDTP)(CartIndex);
