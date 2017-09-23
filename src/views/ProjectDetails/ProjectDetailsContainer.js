import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { compose, withHandlers } from 'recompose';

import ProjectDetails from './ProjectDetails';
import { startDownload } from '../../actions/downloadActions';

const mapStateToProps = state => ({
  selectedProject: state.projects[state.ui.projects.selectedProject],
});

const mapDispatchToProps = {
  startDownload,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

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
