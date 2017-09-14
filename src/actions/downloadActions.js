import {
  DOWNLOAD_STARTED,
  DOWNLOAD_ERRORED,
  DOWNLOAD_COMPLETED,
  UPDATE_CURRENT_DOWNLOAD_PROGRESS,
} from '../actions/actionTypes';

/**
 * Start a download.
 *
 * @param {Object} project
 * @param {String} timestamp - which of the upload timestamps to download.
 * @returns {Object}
 */
export function startDownload(project, timestamp) {
  return {
    type: DOWNLOAD_STARTED,
    payload: {
      project,
      timestamp,
    },
  };
}

/**
 * Stop a download.
 *
 * @param {Object} project
 * @param {String} timestamp
 * @param {String} apkPath
 * @returns {Object}
 */
export function completeDownload(project, timestamp, apkPath) {
  return {
    type: DOWNLOAD_COMPLETED,
    payload: {
      project,
      timestamp,
      apkPath,
    },
  };
}

/**
 * Download has errored.
 *
 * @param {Object} error
 * @param {Object} project
 * @returns {Object}
 */
export function downloadErrored(error, project) {
  return {
    type: DOWNLOAD_ERRORED,
    payload: {
      project,
      error,
    },
  };
}

/**
 * Update progress value for current download. Called repeatedly for progress bar update.
 *
 * @param {String | Number} progress
 * @returns {Object}
 */
export function updateCurrentDownloadProgress(progress) {
  return {
    type: UPDATE_CURRENT_DOWNLOAD_PROGRESS,
    payload: {
      progress,
    },
  };
}
