/* Filesystem interfaces */

import RNFS from 'react-native-fs';

/**
 * Download a file from URL into DocumentDirPath.
 * Allows for progress/begin callbacks.
 *
 * @param {String} url
 * @returns {Object}
 */
function downloadFileFromURL(url) {

  this.url = url;

  this.onProgress = onProgressCb => {
    this.onProgressCb = onProgressCb;

    return this;
  };

  this.withFilename = filename => {
    this.toFile = RNFS.DocumentDirectoryPath + `/${filename}`;

    return this;
  };

  this.setProgressDivider = dividerVal => {
    this.progressDivider = dividerVal;

    return this;
  },

  this.onBegin = onBeginCb => {
    this.onBeginCb = onBeginCb;

    return this;
  };

  this.inBackground = () => {
    this.runInBackground = true;

    return this;
  };

  this.start = () => {
    return RNFS.downloadFile({
      fromUrl: this.url,
      toFile: this.toFile,
      begin: this.onBeginCb,
      progress: this.onProgressCb,
      background: this.runInBackground,
      progressDivider: this.progressDivider,
    });
  };

  return this;
}

export {
  downloadFileFromURL,
};
