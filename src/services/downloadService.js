import * as fs from '../utils/fs';

/**
 * Download an apk.
 *
 * @param {String} url
 * @returns {undefined}
 */
async function downloadApk({ projectName, releaseTimestamp, url }) {
  const jobDetails = fs.downloadFileFromURL(url)
    .withFilename(projectName + '_' + releaseTimestamp)
    .inBackground()
    .onProgress(({ bytesWritten, contentLength }) => {
      console.log('progress: ', bytesWritten/contentLength * 100); // eslint-disable-line
    })
    .setProgressDivider(10)
    .onBegin(() => {
      console.log('started download.'); // eslint-disable-line
    })
    .start();

  await jobDetails.promise;
}

export {
  downloadApk,
};
