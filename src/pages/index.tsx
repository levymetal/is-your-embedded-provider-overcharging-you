import React from 'react';
import {Global, css} from '@emotion/core';
import {Helmet} from 'react-helmet';
import {reset, base, wrapper} from '../styles/common';
import Anchor from '../components/Anchor';
import Form from '../components/Form';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export default function Home() {
  return (
    <div css={wrapper}>
      {/* @ts-ignore 'Helmet' cannot be used as a JSX component. */}
      <Helmet>
        <html lang="en-GB" />
        <title>Is your embedded network provider overcharging you?</title>
        <meta
          name="description"
          content="From the 1st of September 2020, you cannot be charged more than the Victorian default offer. Use this calculator to determine if you're being overcharged."
        />
      </Helmet>
      <Global styles={[reset, base]}></Global>
      <header css={styles.header}>
        <Heading level="1">Is your embedded network provider overcharging you?</Heading>
        <Paragraph>
          On the 28th of July 2020, the{' '}
          <Anchor href="https://www.esc.vic.gov.au/" external>
            Essential Services Commission
          </Anchor>{' '}
          <Anchor
            href="https://www.esc.vic.gov.au/electricity-and-gas/prices-tariffs-and-benchmarks/embedded-network-tariffs-including-caravan-parks/maximum-electricity-prices-embedded-networks-and-other-exempt-sellers-review-2020"
            external
          >
            ruled
          </Anchor>{' '}
          on the maximum price embedded network providers and other exempt sellers can charge for electricity in
          Victoria. These prices take effect from the 1st of September 2020.
        </Paragraph>
      </header>
      <Form />
      <footer css={styles.footer}>
        <p>
          Pricing data sourced from{' '}
          <Anchor
            href="https://www.esc.vic.gov.au/electricity-and-gas/prices-tariffs-and-benchmarks/embedded-network-tariffs-including-caravan-parks/maximum-electricity-prices-embedded-networks-and-other-exempt-sellers-review-2020"
            external
          >
            Maximum electricity prices for embedded networks and other exempt sellers review 2020
          </Anchor>
          . This site is not affiliated with the ESC or any other government agency. No guarantee has been made to
          ensure the accuracy of the data. The data may be incorrect, out-of-date, or missing, and as such should not be
          used as a source of truth. For further information, please refer to the{' '}
          <Anchor href="https://www.esc.vic.gov.au" external>
            Essential Services Commission
          </Anchor>{' '}
          or your energy provider. Use of this form is at your own risk.
        </p>
        <p>
          Built by{' '}
          <Anchor href="https://christianvarga.com" external>
            Christian Varga
          </Anchor>
          .
        </p>
      </footer>
    </div>
  );
}

const styles = {
  header: css`
    text-align: center;
  `,

  footer: css`
    margin-top: 8rem;

    p {
      margin: 1em 0;
    }
  `,
};
