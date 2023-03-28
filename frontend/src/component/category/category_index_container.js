import { connect } from 'react-redux';
import { fetchCategoryProducts } from '../../action/category_action';
import { fetchSearchedProducts } from '../../action/product_actions';
import CategoryIndex from './category_index';

const mSTP = (state, ownProps) => ({
  category: state.entities.categories[ownProps.match.params.id],
  products: Object.values(state.entities.categoryProduct)
});

const mDTP = (dispatch) => {
  return {
    fetchCategoryProducts: (categoryId) => dispatch(fetchCategoryProducts(categoryId)),
    fetchSearchedProducts: (search) => dispatch(fetchSearchedProducts(search)),
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default connect(mSTP, mDTP)(CategoryIndex);
