import React, {ReactNode} from 'react';
import {css} from '@emotion/react';

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
