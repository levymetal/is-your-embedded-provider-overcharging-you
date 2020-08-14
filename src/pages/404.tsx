import React from 'react';
import {Global, css} from '@emotion/core';
import {Helmet} from 'react-helmet';
import {reset, base, wrapper} from '../styles/common';
import Anchor from '../components/Anchor';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export default function Error404() {
  return (
    <div css={styles.root}>
      {/* @ts-ignore 'Helmet' cannot be used as a JSX component. */}
      <Helmet>
        <html lang="en-GB" />
        <title>404 page not found</title>
      </Helmet>
      <Global styles={[reset, base]}></Global>
      <Heading level="1">404 page not found</Heading>
      <Paragraph>
        Sorry, that page doesn't exist. <Anchor href="/">Home</Anchor>.
      </Paragraph>
    </div>
  );
}

const styles = {
  root: [
    wrapper,
    css`
      text-align: center;
    `,
  ],
};
