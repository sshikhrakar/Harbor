import * as fs from '../utils/fs';

/**
 * Download an apk.
 *
 * @param {String} url
 * @returns {undefined}
 */
function downloadApk({ onProgress, filepath, onBegin, url }) {
  const jobDetails = fs.downloadFileFromURL(url)
    .inBackground()
    .onBegin(onBegin)
    .onProgress(onProgress)
    .setProgressDivider(5)
    .withFilename(filepath)
    .start();

  return jobDetails;
}

/**
 * Target path for downloads.
 *
 * @param {String} projectName
 * @param {String} timestamp
 * @returns {String}
 */
function getTargetPath(projectName, timestamp) {
  return fs.getBasePath() + '/' + projectName + '_' + timestamp;
}

export {
  downloadApk,
  getTargetPath,
};
