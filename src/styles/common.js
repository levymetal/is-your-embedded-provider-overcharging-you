import {css} from '@emotion/core';
import {colors} from '../styles/colors';

export {reset} from './reset';

export const base = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  body,
  a {
    color: ${colors.mineShaft};
  }
`;

export const wrapper = css`
  margin: 0 auto;
  max-width: 61rem;
  padding: 3rem 2rem;
`;

export const input = css`
  appearance: none;
  border: 0.1rem solid ${colors.gray};
  color: ${colors.mineShaft};
  font-size: 1.8rem;
  margin: 1.5rem 0;
  padding: 0.5em;
  width: 100%;
`;
