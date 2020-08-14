import React, {ReactNode} from 'react';
import {css} from '@emotion/core';

type Props = {
  children: ReactNode;
  htmlFor: string;
};

export default function Label({children, htmlFor}: Props) {
  return (
    <label
      css={css`
        display: block;
        font-size: 1.8rem;
        font-weight: bold;
      `}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
