import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../action/product_actions';
import { createCart, updateCartItem } from '../../action/cart_action';
import { openModal } from '../../action/modal_action';
import { fetchCartItems } from '../../action/cart_action';

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  cartItem: state.entities.cart,
  currentUser: state.session.id
});

const mDTP = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  createCart: (cartItem) => dispatch(createCart(cartItem)),
  updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
  openModal: (modal) => dispatch(openModal(modal)),
  // testing fetch cart
  fetchCartItems: () => dispatch(fetchCartItems()),
});

export default connect(mSTP, mDTP)(ProductShow);
