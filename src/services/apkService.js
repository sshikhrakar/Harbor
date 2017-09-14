import { NativeModules } from 'react-native';

const { ApkUtil } = NativeModules;

/**
 * Trigger the install of an apk.
 *
 * @param {String} path
 * @returns {Promise}
 */
function triggerInstall(path) {
  return ApkUtil.triggerInstall(path);
}

export {
  triggerInstall,
};
