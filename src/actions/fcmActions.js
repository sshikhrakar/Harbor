import {
  REGISTER_FCM_TOKEN,
  REGISTER_FCM_TOKEN_FULFILLED,
  REGISTER_FCM_TOKEN_ERRORED,
  REFRESH_FCM_TOKEN,
  REFRESH_FCM_TOKEN_FULFILLED,
  REFRESH_FCM_TOKEN_ERRORED,
} from './actionTypes';

/**
 * Dispatch FCM token registration action.
 *
 * @returns {Object}
 */
export function registerFcmToken() {
  return {
    type: REGISTER_FCM_TOKEN,
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


/**
 * Action creator for failed refresh of FCM token.
 *
 * @param {String} token
 * @returns {Object}
 */
export function refreshFcmToken(token) {
  return {
    type: REFRESH_FCM_TOKEN,
    payload: {
      token,
    },
  };
}

/**
 * Action creator for failed refresh of FCM token.
 *
 * @returns {Object}
 */
export function refreshFcmTokenErrored() {
  return {
    type: REFRESH_FCM_TOKEN_ERRORED,
  };
}

/**
 * Action creator for successful refresh of FCM token.
 *
 * @returns {Object}
 */
export function refreshFcmTokenFulfilled() {
  return {
    type: REFRESH_FCM_TOKEN_FULFILLED,
  };
}
