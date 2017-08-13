import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import configureStore from '../../configureStore';
import NewAccountContainer from './NewAccountContainer';


describe('VIEWS: NewAccount', () => {

  let mockStore;

  beforeAll(() => {
    mockStore = configureStore();
  });

  it('should render correctly', () => {
    const tree = renderer.create(
      <Provider store={ mockStore }>
        <NewAccountContainer />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
