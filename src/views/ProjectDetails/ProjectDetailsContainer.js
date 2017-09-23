import { connect } from 'react-redux';
import { Alert } from 'react-native';
import {
  compose,
  withHandlers,
  withState,
} from 'recompose';

import ProjectDetails from './ProjectDetails';
import { startDownload } from '../../actions/downloadActions';

const selectedProjectSelector = state => state.projects[state.ui.projects.selectedProject];

const mapStateToProps = state => ({
  selectedProject: selectedProjectSelector(state),
  downloadInfo: state.downloads.projects && state.downloads.projects[selectedProjectSelector(state).packageName],
});

const mapDispatchToProps = {
  startDownload,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState('buttonText', 'setButtonText', props => {
    const metadata = props.selectedProject.metadata;
    const latestUploadData = props.downloadInfo.uploads[metadata.lastReleasedOn];
    if (latestUploadData && latestUploadData.downloaded) {
      return 'OPEN';
    }

    return 'INSTALLED';
  }),

  withHandlers({
    onInstallButtonClicked: props => project => {
      try {
        if (props.downloadedProjects[project.packageName].uploads[project.metadata.lastReleasedOn].downloaded) {
          Alert.alert(
            'Up to date',
            'You already have the latest build for this project.'
          );

          return;
        }
      } catch (e) {
        /* The above block may fail when no builds have been downloaded for project, and several object keys are
         * undefined in that case. */
        props.startDownload(project, project.metadata.lastReleasedOn);
      }

    },
  }),
);

export default enhance(ProjectDetails);
