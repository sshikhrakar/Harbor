import React from 'react';
import renderer from 'react-test-renderer';
import NewAccount from './NewAccount';

describe('VIEWS: NewAccount', () => {

  it('should render correctly', () => {
    const onSubmit = jest.fn();
    const onCancel = jest.fn();

    const component = renderer.create(
      <NewAccount
        isSigningUp={ false }
        onSubmit={ onSubmit }
        onCancel={ onCancel }
        emailText='abcd'
        passwordText='abcdef'
        setEmailText={ () => true }
        setPasswordText={ () => true }
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
