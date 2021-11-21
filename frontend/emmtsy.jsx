import React from 'react';
import ReactDOM from 'react-dom';
import Root from './component/root';
import configureStore from './store/store';

import * as Action from './action/product_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();

  // tests------------------
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchProduct = Action.fetchProduct;
  window.fetchProducts = Action.fetchProducts;

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

  ReactDOM.render(<Root store={store} />, root);
});
