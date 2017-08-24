import {
  LOGIN_VIA_EMAIL_FULFILLED,
  SIGNUP_VIA_EMAIL_FULFILLED,
  REGISTER_FCM_TOKEN,
} from '../actions/actionTypes';

export const initialState = {
  isLoggedIn: false,
  fcmTokenRegistered: false,
};

/**
 * Reducer for authenticaion state.
 *
 * @param {Object} state=initialState
 * @param {Object} action
 * @returns {Object}
 */
function auth(state = initialState, action) {
  switch(action.type) {

    case LOGIN_VIA_EMAIL_FULFILLED:
      return {
        ...state,
        isLoggedIn: true,
      };

    case SIGNUP_VIA_EMAIL_FULFILLED:
      return {
        ...state,
        isLoggedIn: true,
      };

    case REGISTER_FCM_TOKEN:
      return {
        ...state,
        fcmTokenRegistered: true,
      };

    default:
      return state;
  }
}

export default auth;
