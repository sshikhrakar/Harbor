import React from 'react';
import renderer from 'react-test-renderer';

import LandingPage from './LandingPage';

describe('VIEWS: LandingPage', () => {

  it('should render correctly', () => {
    const tree = renderer.create(
      <LandingPage
        isLoggingIn={ false }
        emailText="foobar@gmail.com"
        errorText=""
        setEmailText={ (text) => this.setState({ emailText: text }) }
        passwordText="123456"
        setPasswordText={ (text) => this.setState({ passwordText: text }) }
        onLoginButtonPress={ () => true }
        onCreateAccountPress={ () => true }
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
