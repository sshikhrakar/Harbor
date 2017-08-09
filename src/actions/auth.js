import {
  LOGIN_VIA_EMAIL,
  LOGIN_VIA_EMAIL_ERRORED,
  LOGIN_VIA_EMAIL_FULFILLED,
} from './actionTypes';

/**
 * Login via Email action creator.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Object}
 */
export function loginViaEmail(email, password) {
  return {
    type: LOGIN_VIA_EMAIL,
    payload: {
      email,
      password,
    },
  };
}

/**
 * Success dispatch for login.
 *
 * @param {Object} payload
 * @returns {Object}
 */
export function loginViaEmailFulfilled(payload) {
  return {
    type: LOGIN_VIA_EMAIL_FULFILLED,
    payload,
  };
}

/**
 * Error dispatch for login.
 *
 * @param {Object} payload
 * @returns {Object}
 */
export function loginViaEmailErrored(payload) {
  return {
    type: LOGIN_VIA_EMAIL_ERRORED,
    payload,
  };
}