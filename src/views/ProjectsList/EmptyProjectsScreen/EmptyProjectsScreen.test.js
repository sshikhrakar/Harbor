import React from 'react';
import renderer from 'react-test-renderer';

import EmptyProjectsScreen from './EmptyProjectsScreen';

describe('EmptyProjectsScreen View', () => {

  it('should render correctly', () => {
    const tree = renderer.create(
      <EmptyProjectsScreen />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
