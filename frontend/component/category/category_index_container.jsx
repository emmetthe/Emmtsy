import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchAllProducts } from '../../action/product_actions';
import { fetchSearchedProducts } from '../../action/product_actions';

const mSTP = (state) => {
  return {
    products: state.entities.products,
    categories: state.entities.categories
  };
};

const mDTP = (dispatch) => {
  return {
    fetchSearchedProducts: (search) => dispatch(fetchSearchedProducts(search)),
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default connect(mSTP, mDTP)(CategoryIndex);
