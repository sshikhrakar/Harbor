import {
  LOGIN_VIA_EMAIL,
  LOGIN_VIA_EMAIL_ERRORED,
  LOGIN_VIA_EMAIL_FULFILLED,
  SIGNUP_VIA_EMAIL,
  SIGNUP_VIA_EMAIL_ERRORED,
  SIGNUP_VIA_EMAIL_FULFILLED,
  SIGNUP_VIA_EMAIL_CANCELLED,
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
export function loginViaEmailFulfilled() {
  return {
    type: LOGIN_VIA_EMAIL_FULFILLED,
  };
}

/**
 * Error dispatch for login.
 *
 * @param {Object} payload
 * @returns {Object}
 */
export function loginViaEmailErrored() {
  return {
    type: LOGIN_VIA_EMAIL_ERRORED,
  };
}

/**
 * Dispatch for signup via email.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Object}
 */
export function signupViaEmail(email, password) {
  return {
    type: SIGNUP_VIA_EMAIL,
    payload: {
      email,
      password,
    },
  };
}


/**
 * Dispatch for successful signup via email.
 *
 * @returns {Object}
 */
export function signupViaEmailFulfilled() {
  return {
    type: SIGNUP_VIA_EMAIL_FULFILLED,
  };
}


/**
 * Dispatch when signup via email errors.
 *
 * @returns {Object}
 */
export function signupViaEmailErrored() {
  return {
    type: SIGNUP_VIA_EMAIL_ERRORED,
  };
}

/**
 * Dispatch for signup cancelled.
 *
 * @returns {undefined}
 */
export function signupViaEmailCancelled() {
  return {
    type: SIGNUP_VIA_EMAIL_CANCELLED,
  };
}
