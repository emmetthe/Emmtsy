import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts, fetchSearchedProducts } from '../../action/product_actions';
import SearchIndex from './search_index';

const mSTP = (state, ownProps) => {
  return {
    products: Object.values(state.entities.products),
    // searchText: ownProps.location.search.split('=')[1]
  };
};
const mDTP = (dispatch) => ({
  fetchSearchedProducts: (search) => dispatch(fetchSearchedProducts(search)),
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(mSTP, mDTP)(SearchIndex);
