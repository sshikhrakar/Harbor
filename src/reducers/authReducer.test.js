import { loginViaEmailFulfilled, loginViaEmailErrored, loginViaEmail } from '../actions/authActions';
import authReducer, { initialState } from './authReducer';

describe('REDUCER: AUTH', () => {

  it('should return initialState when state is undefined and action is empty', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isLoggedIn, isLoggingIn, hasLoginErrored to true, false, false when login is successful', () => {
    expect(
      authReducer(undefined, loginViaEmailFulfilled())
    ).toEqual({
      ...initialState,
      isLoggedIn: true,
      isLoggingIn: false,
      hasLoginErrored: false,
    });
  });

  it('should set isLoggedIn, isLoggingIn, hasLoginErrored to false, false, true when login is successful', () => {
    expect(
      authReducer(undefined, loginViaEmailErrored())
    ).toEqual({
      ...initialState,
      isLoggedIn: false,
      isLoggingIn: false,
      hasLoginErrored: true,
    });
  });

  it('should set isLoggedIn to true when login is dispatched', () => {
    const email = 'foobar@gmail.com';
    const password = '1234';

    expect(
      authReducer(undefined, loginViaEmail(email, password))
    ).toEqual({
      ...initialState,
      isLoggingIn: true,
    });
  });

  it('should set clear isLoggingIn and hasLoginErrored fields when rehydrating the store', () => {
    expect(
      authReducer(undefined, {
        type: 'persist/REHYDRATE',
      })).toEqual({
      ...initialState,
      isLoggingIn: false,
      hasLoginErrored: false,
    });
  });

});
