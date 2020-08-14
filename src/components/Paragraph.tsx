import React, {ReactNode} from 'react';
import {css} from '@emotion/core';

type Props = {
  children: ReactNode;
};

export default function Paragraph({children}: Props) {
  return (
    <p
      css={css`
        font-size: 1.8rem;
        line-height: 1.2;
        margin: 1em 0;
      `}
    >
      {children}
    </p>
  );
}
