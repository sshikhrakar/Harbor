import * as authActions from '../auth';
import * as actionTypes from '../actionTypes';

describe('AUTH ACTION CREATORS', () => {

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


  it('create an action that indicates successful login via email', () => {
    const expectedAction = {
      type: actionTypes.LOGIN_VIA_EMAIL_FULFILLED,
    };

    expect(authActions.loginViaEmailFulfilled()).toEqual(expectedAction);
  });


  it('create an action that indicates unsuccessful login via email', () => {
    const expectedAction = {
      type: actionTypes.LOGIN_VIA_EMAIL_ERRORED,
    };

    expect(authActions.loginViaEmailErrored()).toEqual(expectedAction);
  });

});

