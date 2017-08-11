import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from './index';

describe('HomePage View', () => {

  it('should render correctly', () => {
    const tree = renderer.create(
      <HomePage />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
