import { connect } from 'react-redux';
import { fetchCategories } from '../../action/category_action';
import { fetchSearchedProducts } from '../../action/product_actions';
import Category from './category';

const mSTP = (state) => ({
  categories: Object.values(state.entities.categories),
  products: state.entities.products
});

const mDTP = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchSearchedProducts: (search) => dispatch(fetchSearchedProducts(search)),
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default connect(mSTP, mDTP)(Category);
