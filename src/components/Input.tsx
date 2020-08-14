import React, {ChangeEvent} from 'react';
import {css} from '@emotion/core';
import {input} from '../styles/common';
import {colors} from '../styles/colors';

type Props = {
  inputMode?: 'decimal';
  isValid: boolean;
  maxLength?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
};

export default function Input({inputMode, isValid, maxLength, onChange, placeholder, value}: Props) {
  return (
    <input
      css={[input, !isValid && styles.error]}
      inputMode={inputMode}
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

const styles = {
  error: css`
    border-color: ${colors.vermilion};
    color: ${colors.vermilion};
    outline-color: ${colors.vermilion};
  `,
};
