import { LOGIN_VIA_EMAIL_FULFILLED, LOGIN_VIA_EMAIL_ERRORED } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  hasLoginErrored: false,
};

function auth(state = initialState, action) {
  switch(action.type) {
    case LOGIN_VIA_EMAIL_FULFILLED:
      return {
        ...state,
        isLoggedIn: true,
        hasLoginErrored: false,
      };

    case LOGIN_VIA_EMAIL_ERRORED:
      return {
        ...state,
        isLoggedIn: false,
        hasLoginErrored: true,
      };

    default:
      return state;
  }
}

export default auth;
