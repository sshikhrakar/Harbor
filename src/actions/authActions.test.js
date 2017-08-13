import * as authActions from './authActions';
import * as actionTypes from './actionTypes';

describe('ACTION CREATORS: AUTH', () => {

  it('should create an action to login via email', () => {
    const email = 'test@test.com';
    const password = 'foobarbaz1234';
    const expectedAction = {
      type: actionTypes.LOGIN_VIA_EMAIL,
      payload: {
        email,
        password,
      },
    };

    expect(authActions.loginViaEmail(email, password)).toEqual(expectedAction);
  });

  it('should create an action that indicates successful login via email', () => {
    const expectedAction = {
      type: actionTypes.LOGIN_VIA_EMAIL_FULFILLED,
    };

    expect(authActions.loginViaEmailFulfilled()).toEqual(expectedAction);
  });


  it('should create an action that indicates unsuccessful login via email', () => {
    const expectedAction = {
      type: actionTypes.LOGIN_VIA_EMAIL_ERRORED,
    };

    expect(authActions.loginViaEmailErrored()).toEqual(expectedAction);
  });

  it('should create an action for signing up via email', () => {
    const email = 'foobar@foobar.com';
    const password = 'asdfghhh';

    const expectedAction = {
      type: actionTypes.SIGNUP_VIA_EMAIL,
      payload: {
        email,
        password,
      },
    };

    expect(authActions.signupViaEmail(email, password)).toEqual(expectedAction);
  });

  it('should create an action for successful sign up via email', () => {
    const expectedAction = {
      type: actionTypes.SIGNUP_VIA_EMAIL_FULFILLED,
    };

    expect(authActions.signupViaEmailFulfilled()).toEqual(expectedAction);
  });


  it('should create an action for unsuccessful sign up via email', () => {
    const expectedAction = {
      type: actionTypes.SIGNUP_VIA_EMAIL_ERRORED,
    };

    expect(authActions.signupViaEmailErrored()).toEqual(expectedAction);
  });

});

