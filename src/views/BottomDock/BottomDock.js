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
  return (
    <HorizontalProgressBar
      value={ 0.5 }
      text="Downloading ..."
      onPress={ () => true}
    />
  );
}

export default BottomDock;
