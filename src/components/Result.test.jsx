import React from 'react';
import renderer from 'react-test-renderer';
import Result from './Result';

describe('Result', () => {
  const props = {
    customerType: 'residential',
    distributor: 'united',
    supply: '1.0634',
    usage: '0.2242',
    usage2: '0.2811',
    gst: 'inclusive',
  };

  describe('default', () => {
    it('renders correctly', () => {
      expect(renderer.create(<Result {...props} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('without charges', () => {
    it('renders correctly', () => {
      expect(renderer.create(<Result {...props} supply="" usage="" />).toJSON()).toMatchSnapshot();
    });
  });

  describe('rorted on supply', () => {
    it('renders correctly', () => {
      const supply = String(Number(props.supply) + 0.05955);
      expect(renderer.create(<Result {...props} supply={supply} />).toJSON()).toMatchSnapshot();
    });
  });

  describe('rorted on usage', () => {
    it('renders correctly', () => {
      const usage = String(Number(props.usage) + 0.02583);
      expect(renderer.create(<Result {...props} usage={usage} />).toJSON()).toMatchSnapshot();
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
      expect(renderer.create(<Result {...props} distributor="ausnet" />).toJSON()).toMatchSnapshot();
    });
  });
});
