import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { fetchAllProducts } from '../../action/product_actions';

const mSTP = ({ session, entities: { users, products } }) => ({
  currentUser: users[session.id],
  products: Object.values(products),
});

const mDTP = (dispatch) => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});

export default connect(mSTP, mDTP)(Home);
