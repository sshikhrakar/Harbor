import { compose } from 'recompose';
import { connect } from 'react-redux';

import { hideElementIf } from '../../HOC';

import BottomDock from './BottomDock';

const mapStateToProps = state => ({
  currentDownload: state.downloads.current,
  isDownloading: state.downloads.isDownloading,
});

const enhance = compose(
  connect(mapStateToProps, null),

  hideElementIf(props => !props.currentDownload),
);

export default enhance(BottomDock);
