// @flow
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import type { Store } from 'redux';

import App from 'components/App';

type Props = {
  store: Store
};

const Root = (props: Props) => {
  const { store } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
