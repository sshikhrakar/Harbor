import {
  LOGIN_VIA_EMAIL,
  LOGIN_VIA_EMAIL_ERRORED,
  LOGIN_VIA_EMAIL_FULFILLED,
} from '../actions/actionTypes';

export const initialState = {
  isLoggedIn: false,
  isLoggingIn: true,
  hasLoginErrored: false,
};

function auth(state = initialState, action) {
  switch(action.type) {
    case LOGIN_VIA_EMAIL:
      return {
        ...state,
        isLoggingIn: true,
      };

    case LOGIN_VIA_EMAIL_FULFILLED:
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        hasLoginErrored: false,
      };

    case LOGIN_VIA_EMAIL_ERRORED:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        hasLoginErrored: true,
      };

    default:
      return state;
  }
}

export default auth;
