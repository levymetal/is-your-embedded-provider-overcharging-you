import React from 'react';
import {css} from '@emotion/core';
import {PRICING_DATA} from '../constants/data';
import {format, getChargesIncGst, getRorts} from '../lib/helper';
import {colors} from '../styles/colors';
import Paragraph from './Paragraph';

type Props = {
  customerType: 'residential' | 'business';
  distributor: keyof typeof PRICING_DATA;
  supply: string;
  usage: string;
  usage2: string;
  gst?: string;
};

export default function Result({customerType, distributor, supply, usage, usage2, gst}: Props) {
  const isAusnet = distributor === 'ausnet';
  const prices = PRICING_DATA[distributor][customerType];
  const charges = getChargesIncGst(gst === 'inclusive', supply, usage, usage2);
  const rorts = getRorts(charges, prices);

  const message =
    rorts.supply && rorts.anyUsage
      ? 'You may be getting overcharged on both supply and usage.'
      : rorts.supply
      ? 'You may be getting overcharged on supply.'
      : rorts.anyUsage
      ? 'You may be getting overcharged on usage.'
      : 'Your rates seem to be acceptable.';

  return gst && (charges.supply || charges.usage || charges.usage2) ? (
    <section css={styles.root}>
      <div
        css={css`
          color: ${rorts.supply || rorts.anyUsage ? colors.vermilion : colors.oceanGreen};
        `}
      >
        <Emoji symbol={rorts.supply || rorts.anyUsage ? '😿' : '😸'} />
        <Paragraph>{message}</Paragraph>
      </div>
      <table css={styles.table}>
        <thead>
          <tr>
            <th aria-label="Charge" />
            <th>Your charge (inc gst)</th>
            <th>Maximum charge (inc gst)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supply / day</td>
            <td css={rorts.supply ? styles.red : styles.green}>${format(charges.supply)}</td>
            <td>${format(prices.supply)}</td>
          </tr>
          <tr>
            <td>Usage / kWh {isAusnet && '(Block 1)'}</td>
            <td css={rorts.usage ? styles.red : styles.green}>${format(charges.usage)}</td>
            <td>${format(prices.usage)}</td>
          </tr>
          {isAusnet && (
            <tr>
              <td>Usage / kWh (Block 2)</td>
              <td css={rorts.usage2 ? styles.red : styles.green}>${format(charges.usage2)}</td>
              {/* @ts-ignore */}
              <td>${format(prices.usage2)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  ) : (
    <section css={styles.root}>
      <Emoji symbol="🤷‍♀️" />
    </section>
  );
}

function Emoji({symbol}: {symbol: string}) {
  return (
    <span aria-hidden css={styles.emoji} role="img">
      {symbol}
    </span>
  );
}

const styles = {
  root: css`
    margin-top: 6rem;
    text-align: center;
  `,

  emoji: css`
    display: block;
    font-size: 8rem;
  `,

  table: css`
    font-size: 1.6rem;
    font-variant-numeric: tabular-nums;
    margin-top: 4rem;
    text-align: left;
    width: 100%;

    th,
    td:first-of-type {
      font-weight: bold;
    }

    td:first-of-type {
      width: 40%;
    }

    th,
    td {
      background: ${colors.alabaster};
      border: 0.1rem solid white;
      padding: 1em;
    }
  `,

  red: css`
    color: ${colors.vermilion};
  `,

  green: css`
    color: ${colors.oceanGreen};
  `,
};
