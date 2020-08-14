import React, {ReactNode} from 'react';
import {css} from '@emotion/core';

type Props = {
  children: ReactNode;
  level: '1';
};

export default function Heading({children, level = '1'}: Props) {
  const HeadingTag = `h${level}`;

  return (
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28892
    <HeadingTag
      css={css`
        font-size: ${fontSize[level]};
        font-weight: bold;
        margin: 1em 0;
      `}
    >
      {children}
    </HeadingTag>
  );
}

const fontSize = {
  '1': '3.6rem',
};
