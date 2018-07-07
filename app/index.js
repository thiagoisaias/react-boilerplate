/**
 * Define app entry point.
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';

/* Import global styles and css reset */
import './globalStyles';
import 'normalize.css';

import Root from 'components/Root';
import configureStore from 'store/configureStore';
import type { Store } from 'redux';

const store: Store = configureStore();

const rootElement = document.getElementById('root');

if (rootElement !== null) {
  ReactDOM.render(<Root store={store} />, rootElement);

  if (module.hot) {
    module.hot.accept('./components/Root', () => {
      ReactDOM.render(<Root store={store} />, rootElement);
    });
  }
} else {
  throw new Error('No root element.');
}
