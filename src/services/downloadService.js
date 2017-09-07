import * as fs from '../utils/fs';

/**
 * Download an apk.
 *
 * @param {String} url
 * @returns {undefined}
 */
function downloadApk({ onProgress, onBegin, projectName, releaseTimestamp, url }) {
  const jobDetails = fs.downloadFileFromURL(url)
    .inBackground()
    .onBegin(onBegin)
    .onProgress(onProgress)
    .setProgressDivider(5)
    .withFilename(projectName + '_' + releaseTimestamp)
    .start();

  return jobDetails;
}

export {
  downloadApk,
};
