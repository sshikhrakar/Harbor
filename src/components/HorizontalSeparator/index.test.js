import React from 'react';
import renderer from 'react-test-renderer';

import HorizontalSeparator from './index';

describe('COMPONENTS: HorizontalSeparator', () => {

  it('should render correctly', () => {
    const tree = renderer.create(
      <HorizontalSeparator
        color='red'
        thickness={ 1 }
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
