import React from 'react';
import renderer from 'react-test-renderer';

import ButtonWithSpinner from '../ButtonWithSpinner';

describe('COMPONENTS: ButtonWithSpinner', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <ButtonWithSpinner
        text="TestButtonText"
        onPress={ () => true }
        isLoading={ true }
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
