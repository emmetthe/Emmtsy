import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../action/product_actions';

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
});

const mDTP = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
});

export default connect(mSTP, mDTP)(ProductShow);
