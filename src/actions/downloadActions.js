import {
  DOWNLOAD_STARTED,
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
 * @returns {Object}
 */
export function completeDownload() {
  return {
    type: DOWNLOAD_COMPLETED,
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
