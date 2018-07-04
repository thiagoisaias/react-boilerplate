import React from 'react';
import ReactDOM from 'react-dom';

/* Import global styles and css reset */
import './globalStyles';
import 'normalize.css';

import App from 'components/App';

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
