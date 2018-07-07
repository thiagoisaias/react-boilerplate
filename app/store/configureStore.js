/**
 * Create a Redux Store.
 */

// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

/* eslint-disable no-underscore-dangle */
export default function configureStore() {
  const isProductionEnv = process.env.NODE_ENV === 'production';

  // Redux DevTools shouldn't be enabled in production env
  const composeEnhancers = isProductionEnv
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

  /* eslint-enable */
  const initialState = {};

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
