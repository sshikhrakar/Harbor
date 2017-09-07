import React from 'react';

import { HorizontalProgressBar } from '../../components';

/**
 * The bottom HUD is not rendered as a separate view,
 * but (generally) as the last element of any given view.
 * Hence, it is not put into the registry.
 *
 * @param {Object} props
 * @returns {jsx}
 */
function BottomDock(props) { // eslint-disable-line
  const { currentDownload } = props;

  return (
    <HorizontalProgressBar
      value={ currentDownload.progress }
      text={ composeDownloadText(currentDownload.progress) }
      onPress={ () => true }
    />
  );
}

/**
 * Text for the bottom dock.
 *
 * @param {Number} progress
 * @returns {String}
 */
function composeDownloadText(progress) {
  return `Downloading... ${(progress * 100).toFixed(2)}%`;
}

export default BottomDock;
