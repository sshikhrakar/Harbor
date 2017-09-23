import { connect } from 'react-redux';
import { Alert } from 'react-native';
import {
  compose,
  branch,
  lifecycle,
  withHandlers,
  renderComponent,
} from 'recompose';

import ProjectsList from './ProjectsList';
import EmptyProjectsScreen from './EmptyProjectsScreen';

import { validators } from '../../utils';
import images from '../../config/images';
import { screenRegistry } from '../../screenRegistry';
import { startDownload } from '../../actions/downloadActions';
import { registerFcmToken } from '../../actions/fcmActions.js';
import { fetchAllProjects, setSelectedProject } from '../../actions/projectActions';

const mapDispatchToProps = {
  startDownload,
  fetchAllProjects,
  setSelectedProject,
  registerFcmToken,
};

const mapStateToProps = state => ({
  projects: state.projects,
  isFetching: state.ui.projects.isFetching,
  downloadedProjects: state.downloads.projects,
  isDownloading: state.downloads.isDownloading,
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withHandlers({
    // onProjectListItemClicked: props => project => {
    //  if (props.isDownloading) {
    //    Alert.alert(
    //      'You cannot do that',
    //      'A download is already in progress. Please wait for it to finish before starting another one.'
    //    );

    //    return;
    //  }

    //  if (!project.metadata) {
    //    Alert.alert(
    //      'No updates available',
    //      'There aren\'t any builds available for this project right now.'
    //    );

    //    return;
    //  }

    //  try {
    //    if(props.downloadedProjects[project.packageName].uploads[project.metadata.lastReleasedOn].downloaded) {
    //      Alert.alert(
    //        'Up to date',
    //        'You already have the latest build for this project.'
    //      );

    //      return;
    //    }
    //  } catch (e) {
    //    /* The above block may fail when no builds have been downloaded for project, and several object keys are
    //     * undefined in that case. */
    //    props.startDownload(project, project.metadata.lastReleasedOn);
    //  }

    // },

    onProjectListItemClicked: props => project => {
      if (!project.uploads) {
        Alert.alert(
          'No builds available',
          'There aren\'t any builds available for this project right now.'
        );

        return;
      }

      props.setSelectedProject(project.packageName);

      props.navigator.push({
        animated: true,
        title: project.name,
        animationType: 'slide-horizontal',
        screen: screenRegistry.PROJECT_DETAILS,
      });
    },

    /**
     * Get proper icon for each project in the list.
     * Different icons contingent upon if the project:
     *  - has already been downloaded
     *  - is being downloaded
     *  - has a download available
     *  - has no downloads available
     *
     * @param {Object} props
     * @returns {function}
     */
    getDownloadIcon: props => project => { // eslint-disable-line
      try {
        if (props.downloadedProjects[project.packageName].uploads[project.metadata.lastReleasedOn].downloaded) {
          return images.installIcon;
        }

        if (props.downloadedProjects[project.packageName].uploads[project.metadata.lastReleasedOn].downloading) {
          return images.downloadingIcon;
        }

        return images.downloadIcon;
      } catch (e) { // eslint-disable-line
        return null;
      }
    },
  }),

  lifecycle({
    componentDidMount() {
      this.props.registerFcmToken();
      this.props.fetchAllProjects();
    },
  }),

  branch(
    props => validators.isEmptyObject(props.projects) && !props.isFetching,
    renderComponent(EmptyProjectsScreen),
  ),
);

export default enhance(ProjectsList);
