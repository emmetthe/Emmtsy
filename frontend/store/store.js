import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/root_reducer';

const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk, logger)));
export default configureStore;
