import React, {ReactNode} from 'react';
import {css} from '@emotion/core';

type Props = {
  children: ReactNode;
};

export default function Field({children}: Props) {
  return (
    <div
      css={css`
        margin: 2rem 0;
      `}
    >
      {children}
    </div>
  );
}
