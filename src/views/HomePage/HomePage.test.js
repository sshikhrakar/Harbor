import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from './HomePage';

describe('HomePage View', () => {

  it('should render correctly', () => {
    const tree = renderer.create(
      <HomePage />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
