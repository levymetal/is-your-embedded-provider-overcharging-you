import React, {ChangeEvent} from 'react';
import {css} from '@emotion/core';

type Props = {
  checked: boolean;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function RadioButton({checked, label, name, onChange, value}: Props) {
  return (
    <label css={styles.root}>
      <input css={styles.input} checked={checked} name={name} onChange={onChange} type="radio" value={value} />
      <span css={styles.label}>{label}</span>
    </label>
  );
}

const styles = {
  root: css`
    display: inline-flex;
    margin: 1.5rem 0;
  `,

  input: css`
    height: 1.8rem;
    margin: 0;
    width: 1.8rem;
  `,

  label: css`
    display: inline-block;
    font-size: 1.8rem;
    margin: 0 2em 0 0.5em;
  `,
};
