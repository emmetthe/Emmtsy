import React from 'react';
import { fetchProduct, fetchAllProducts } from '../../action/product_actions';
import { connect } from 'react-redux';
import ProductIndex from './product_index';

const mSTP = (state) => ({
  products: Object.values(state.entities.products)
});

const mDTP = (dispatch) => ({
  fetchProducts: () => dispatch(fetchAllProducts()),
});

export default connect(mSTP, mDTP)(ProductIndex);
