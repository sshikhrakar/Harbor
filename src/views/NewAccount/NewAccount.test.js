import React from 'react';
import renderer from 'react-test-renderer';

import NewAccount from './NewAccount';
import { enhance } from './NewAccountContainer';

describe('VIEWS: NewAccount', () => {

  it('should render correctly', () => {
    const tree = renderer.create(enhance(<NewAccount />)).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
