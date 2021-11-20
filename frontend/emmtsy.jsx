import React from 'react';
import ReactDOM from 'react-dom';
import Root from './component/root';
import configureStore from './store/store';

import * as SessionAction from './action/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();

  // tests------------------
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = SessionAction.login;
  window.logout = SessionAction.logout;
  window.signup = SessionAction.signup;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);
});
