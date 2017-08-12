import uiReducer, { initialState } from './uiReducer';
import { loginViaEmail, loginViaEmailFulfilled, loginViaEmailErrored } from '../actions/authActions';

describe('REDUCER: UI', () => {

  it('should render the initial state when state is undefined and action is an empty object', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isLoggingIn to true when loginViaEmail is received', () => {
    const email = 'foobar@gmail.com';
    const password = 'foobar';

    expect(
      uiReducer(undefined, loginViaEmail(email, password))
    ).toEqual({
      ...initialState,
      auth: {
        ...initialState.auth,
        isLoggingIn: true,
      },
    });
  });


  it('should clear isLoggingIn and error when loginViaEmailFulfilled is received', () => {
    expect(
      uiReducer({
        ...initialState,
        auth: {
          ...initialState.auth,
          isLoggingIn: Math.random() > 0.5 ? false : true,
          hasLoginErrored: Math.random() > 0.5 ? false : true,
        },
      }, loginViaEmailFulfilled())
    ).toEqual({
      ...initialState,
      auth: {
        ...initialState.auth,
        isLoggingIn: false,
        hasLoginErrored: false,
      },
    });
  });


  it('should set hasLoginErrored and clear isLoggingIn when loginViaEmailErrored is received', () => {
    expect(
      uiReducer({
        ...initialState,
        auth: {
          ...initialState.auth,
          isLoggingIn: Math.random() > 0.5 ? true : false,
          hasLoginErrored: Math.random() > 0.5 ? true : false,
        },
      }, loginViaEmailErrored())
    ).toEqual({
      ...initialState,
      auth: {
        ...initialState.auth,
        isLoggingIn: false,
        hasLoginErrored: true,
      },
    });
  });

});
