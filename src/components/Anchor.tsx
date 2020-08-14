import React, {ReactNode} from 'react';
import {css} from '@emotion/core';
import {colors} from '../styles/colors';

type Props = {
  children: ReactNode;
  external?: boolean;
  href: string;
};

export default function Anchor({children, external = false, href}: Props) {
  return (
    <a
      css={css`
        color: ${colors.hotPink};
        text-decoration: underline;
      `}
      href={href}
      rel={external ? 'noreferrer noopener' : null}
      target={external ? '_blank' : null}
    >
      {children}
    </a>
  );
}
