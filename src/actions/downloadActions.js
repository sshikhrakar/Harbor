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
 * @returns {Object}
 */
export function startDownload(project) {
  return {
    type: DOWNLOAD_STARTED,
    payload: {
      project,
    },
  };
}

/**
 * Stop a download.
 *
 * @param {Object} project
 * @returns {Object}
 */
export function completeDownload(project) {
  return {
    type: DOWNLOAD_COMPLETED,
    payload: {
      project,
    },
  };
}

/**
 * Download has errored.
 *
 * @param {Object} error
 * @returns {Object}
 */
export function downloadErrored(error) {
  return {
    type: DOWNLOAD_ERRORED,
    payload: {
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
