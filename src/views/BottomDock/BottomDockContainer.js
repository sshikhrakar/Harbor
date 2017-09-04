import { compose } from 'recompose';
import { connect } from 'react-redux';

import BottomDock from './BottomDock';

const mapStateToProps = state => ({
  currentDownload: state.meta.downloads.current,
  isDownloading: state.meta.downlods.isDownloading,
});

const enhance = compose(
  connect(mapStateToProps, null)
);

export default enhance(BottomDock);
