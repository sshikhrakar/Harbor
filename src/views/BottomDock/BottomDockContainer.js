import { compose } from 'recompose';
import { connect } from 'react-redux';

import { hideElementIf } from '../../HOC';

import BottomDock from './BottomDock';

const mapStateToProps = state => ({
  isDownloading: state.downloads.isDownloading,
  currentDownload: state.downloads.currentDownload,
});

const enhance = compose(
  connect(mapStateToProps, null),

  hideElementIf(props => !props.isDownloading),
);

export default enhance(BottomDock);
