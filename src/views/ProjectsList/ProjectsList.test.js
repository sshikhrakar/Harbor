import React from 'react';
import renderer from 'react-test-renderer';

import ProjectsList from './ProjectsList.js';

describe('HomePage View', () => {

  it('should render correctly', () => {
    const tree = renderer.create(
      <ProjectsList />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
