import React from 'react';
import {css} from '@emotion/core';
import useForm from '../hooks/useForm';
import Anchor from './Anchor';
import Field from './Field';
import Input from './Input';
import Label from './Label';
import RadioButton from './RadioButton';
import Result from './Result';
import Select from './Select';

const CHARGE_REGEX = /^\$?\.?\d+\.?\d*$/;

export default function Form() {
  const {fields} = useForm({
    fields: {
      customerType: {
        name: 'customer-type',
        value: 'residential',
      },
      distributor: {
        name: 'distributor',
        value: 'citipower',
      },
      supply: {
        name: 'supply',
        maxLength: 7,
        value: '',
        validation: CHARGE_REGEX,
      },
      usage: {
        name: 'usage',
        maxLength: 7,
        value: '',
        validation: CHARGE_REGEX,
      },
      usage2: {
        name: 'usage2',
        maxLength: 7,
        value: '',
        validation: CHARGE_REGEX,
      },
      gst: {
        name: 'gst',
      },
    },
  });

  const isAusnet = fields.distributor.value === 'ausnet';

  return (
    <div
      css={css`
        margin: 6rem 0;
      `}
    >
      <Field>
        <Label htmlFor="customer-type">What type of customer are you?</Label>
        <Select {...fields.customerType}>
          <option value="residential">Residential</option>
          <option value="business">Small Business</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="distributor">
          Who’s your distributor? (
          <Anchor href="https://www.energy.vic.gov.au/electricity/electricity-distributors" external>
            help
          </Anchor>
          )
        </Label>
        <Select {...fields.distributor}>
          <option value="ausnet">AusNet Services</option>
          <option value="citipower">CitiPower</option>
          <option value="jemena">Jemena</option>
          <option value="powercor">Powercor</option>
          <option value="united">United Energy</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="supply">What’s your supply charge? ($ per day)</Label>
        <Input {...fields.supply} inputMode="decimal" placeholder="1.1408" />
      </Field>
      <Field>
        <Label htmlFor="usage">What’s your {isAusnet && 'Block 1'} usage charge? ($ per kWh)</Label>
        <Input {...fields.usage} inputMode="decimal" placeholder="0.3072" />
      </Field>
      {isAusnet && (
        <Field>
          <Label htmlFor="usage2">What’s your Block 2 usage charge? ($ per kWh)</Label>
          <Input {...fields.usage2} inputMode="decimal" placeholder="0.3272" />
        </Field>
      )}
      <Field>
        <Label htmlFor="gst">Do these charges include GST?</Label>
        <RadioButton
          {...fields.gst}
          value="exclusive"
          label="GST is excluded"
          checked={fields.gst.value === 'exclusive'}
        />
        <RadioButton
          {...fields.gst}
          value="inclusive"
          label="GST is included"
          checked={fields.gst.value === 'inclusive'}
        />
      </Field>
      <Result
        customerType={fields.customerType.value}
        distributor={fields.distributor.value}
        supply={fields.supply.value}
        usage={fields.usage.value}
        usage2={fields.usage2.value}
        gst={fields.gst.value}
      />
    </div>
  );
}
