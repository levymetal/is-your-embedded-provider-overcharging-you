import React, {ReactNode} from 'react';
import {css} from '@emotion/core';

type Props = {
  children: ReactNode;
};

export default function Label({children}: Props) {
  return (
    <label
      css={css`
        display: block;
        font-size: 1.8rem;
        font-weight: bold;
      `}
    >
      {children}
    </label>
  );
}
