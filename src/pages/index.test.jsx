import React from 'react';
import renderer from 'react-test-renderer';
import Home from './';

describe('Home', () => {
  it('renders correctly', () => {
    expect(renderer.create(<Home />).toJSON()).toMatchSnapshot();
  });
});
