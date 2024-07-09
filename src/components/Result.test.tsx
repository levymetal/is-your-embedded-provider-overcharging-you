import React from 'react';
import renderer from 'react-test-renderer';
import {PRICING_DATA} from '../constants/data';
import Result from './Result';

describe('Result', () => {
  const props = {
    customerType: 'residential',
    distributor: 'united',
    supply: String(PRICING_DATA.united.residential.supply),
    usage: String(PRICING_DATA.united.residential.usage),
    usage2: '',
    gst: 'inclusive',
  } as const;

  describe('default', () => {
    it('renders correctly', () => {
      expect(renderer.create(<Result {...props} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('without charges', () => {
    it('renders correctly', () => {
      expect(renderer.create(<Result {...props} supply="" usage="" usage2="" />).toJSON()).toMatchSnapshot();
    });
  });

  describe('rorted on supply', () => {
    it('renders correctly', () => {
      const supply = String(Number(props.supply) + 0.05955);
      expect(renderer.create(<Result {...props} supply={supply} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('rorted on supply but saving more on usage', () => {
    it('renders correctly', () => {
      const supply = String(Number(props.supply) + 0.05955);
      expect(renderer.create(<Result {...props} usage="0" supply={supply} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('rorted on usage', () => {
    it('renders correctly', () => {
      const usage = String(Number(props.usage) + 0.02583);
      expect(renderer.create(<Result {...props} usage={usage} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('rorted on usage but saving more on supply', () => {
    it('renders correctly', () => {
      const usage = String(Number(props.usage) + 0.02583);
      expect(renderer.create(<Result {...props} usage={usage} supply="0" />).toJSON()).toMatchSnapshot();
    });
  });

  describe('gst exclusive', () => {
    it('renders correctly', () => {
      expect(renderer.create(<Result {...props} gst="exclusive" />).toJSON()).toMatchSnapshot();
    });
  });

  describe('without gst', () => {
    it('renders correctly', () => {
      expect(renderer.create(<Result {...props} gst="" />).toJSON()).toMatchSnapshot();
    });
  });

  describe('ausnet', () => {
    it('renders correctly', () => {
      const {supply, usage, usage2} = PRICING_DATA.ausnet.residential;

      expect(
        renderer
          .create(
            <Result
              {...props}
              distributor="ausnet"
              supply={String(supply)}
              usage={String(usage)}
              usage2={String(usage2)}
            />
          )
          .toJSON()
      ).toMatchSnapshot();
    });
  });
});
