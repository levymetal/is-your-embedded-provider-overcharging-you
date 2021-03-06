import React from 'react';
import renderer from 'react-test-renderer';
import Result from './Result';

describe('Result', () => {
  const props = {
    customerType: 'residential',
    distributor: 'united',
    supply: '0.98240',
    usage: '0.24000',
    usage2: '0.28820',
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
      expect(renderer.create(<Result {...props} supply="1.04195" />).toJSON()).toMatchSnapshot();
    });
  });

  describe('rorted on usage', () => {
    it('renders correctly', () => {
      expect(renderer.create(<Result {...props} usage="0.26583" />).toJSON()).toMatchSnapshot();
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
