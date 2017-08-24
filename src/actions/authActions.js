import {
  LOGIN_VIA_EMAIL,
  LOGIN_VIA_EMAIL_ERRORED,
  LOGIN_VIA_EMAIL_FULFILLED,

  SIGNUP_VIA_EMAIL,
  SIGNUP_VIA_EMAIL_ERRORED,
  SIGNUP_VIA_EMAIL_FULFILLED,
  SIGNUP_VIA_EMAIL_CANCELLED,

  REGISTER_FCM_TOKEN,
  REGISTER_FCM_TOKEN_FULFILLED,
  REGISTER_FCM_TOKEN_ERRORED,
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
 * @param {String} error
 * @returns {Object}
 */
export function signupViaEmailErrored(error) {
  return {
    type: SIGNUP_VIA_EMAIL_ERRORED,
    payload: {
      error: JSON.parse(JSON.stringify(error)).message,
    },
  };
}

/**
 * Dispatch for signup cancelled.
 *
 * @returns {Object}
 */
export function signupViaEmailCancelled() {
  return {
    type: SIGNUP_VIA_EMAIL_CANCELLED,
  };
}


/**
 * Dispatch FCM token registration action.
 *
 * @param {String} token
 * @returns {Object}
 */
export function registerFcmToken(token) {
  return {
    type: REGISTER_FCM_TOKEN,
    payload: {
      token,
    },
  };
}


/**
 * Dispatch when FCM token is successfully registered.
 *
 * @returns {Object}
 */
export function registerFcmTokenFulfilled() {
  return {
    type: REGISTER_FCM_TOKEN_FULFILLED,
  };
}

/**
 * Dispatch when FCM token registration fails.
 *
 * @param {Object} err
 * @returns {Object}
 */
export function registerFcmTokenErrored(err) {
  return {
    type: REGISTER_FCM_TOKEN_ERRORED,
    payload: {
      err,
    },
  };
}
