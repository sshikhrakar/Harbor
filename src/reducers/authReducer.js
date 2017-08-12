import { LOGIN_VIA_EMAIL_FULFILLED } from '../actions/actionTypes';

export const initialState = {
  isLoggedIn: false,
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

    default:
      return state;
  }
}

export default auth;
