import React from 'react';
import renderer from 'react-test-renderer';

import TextLink from './TextLink';

describe('COMPONENTS: TextLink', () => {

  it('should render correctly', () => {
    const tree = renderer.create(
      <TextLink
        text="SampleButtonText"
        onPress={ () => true }
        activeOpacity={ 0.3 }
        style={{ color: 'red' }}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
