import { loginViaEmailFulfilled } from '../actions/authActions';
import authReducer, { initialState } from './authReducer';

describe('REDUCER: AUTH', () => {

  it('should return initialState when state is undefined and action is empty', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isLogged flag to true when login is successful', () => {
    expect(
      authReducer(undefined, loginViaEmailFulfilled())
    ).toEqual({
      ...initialState,
      isLoggedIn: true,
    });
  });

});
