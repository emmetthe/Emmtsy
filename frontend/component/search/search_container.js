import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchedProducts } from '../../action/product_actions';
import SearchIndex from './search_index';

const mSTP = (state) => {
  return { products: Object.values(state.entities.products) };
};
const mDTP = (dispatch) => ({
  fetchSearchedProducts: (search) => dispatch(fetchSearchedProducts(search))
});

export default connect(mSTP, mDTP)(SearchIndex)
