import {
  INSTALL_APK,
  INSTALL_APK_ERRORED,
  INSTALL_APK_FULFILLED,
} from './actionTypes';

/**
 * Action to install a locally available apk.
 *
 * @param {String} path
 * @returns {Object}
 */
export function installApk(path) {
  return {
    type: INSTALL_APK,
    payload: {
      path,
    },
  };
}

/**
 * Action to indicate fulfillment of apk install.
 *
 * @returns {Object}
 */
export function installApkFulfilled() {
  return {
    type: INSTALL_APK_FULFILLED,
  };
}

/**
 * Action to indicate failure of apk install.
 *
 * @returns {Object}
 */
export function installApkErrored() {
  return {
    type: INSTALL_APK_ERRORED,
  };
}
