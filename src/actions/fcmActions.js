import {
  REGISTER_FCM_TOKEN,
  REGISTER_FCM_TOKEN_FULFILLED,
  REGISTER_FCM_TOKEN_ERRORED,
} from './actionTypes';

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
