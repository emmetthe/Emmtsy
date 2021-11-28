import { connect } from 'react-redux';
import { fetchCartItems, createCart, deleteCartItem, updateCartItem } from '../../action/cart_action';
import CartIndex from './cart_index';
import { fetchAllProducts } from '../../action/product_actions';

const mSTP = (state, ownProps) => {
  return {
  cart: Object.values(state.entities.cart),
  user: state.session.id,
  products: Object.values(state.entities.products)
  }
};

const mDTP = (dispatch) => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
  createCart: (cartItem) => dispatch(createCart(cartItem)),
  deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
  updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(mSTP, mDTP)(CartIndex);
