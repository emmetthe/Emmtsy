import React from 'react';
import ReactDOM from 'react-dom';
import Root from './component/root';
import configureStore from './store/store';

import * as Cart from './action/cart_action';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // tests------------------
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchCartItems = Cart.fetchCartItems;
  window.createCart = Cart.createCart;
  window.deleteCart = Cart.deleteCartItem;
  window.updateCart = Cart.updateCartItem;
  // ---------------------------
  ReactDOM.render(<Root store={store} />, root);
});
