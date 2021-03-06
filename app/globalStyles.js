/**
 * Inject global styles using styled components.
 */

import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    min-height: 100%;
    min-width: 100%;
    background-color: #fafafa;
    box-sizing: border-box;
  }
`;
