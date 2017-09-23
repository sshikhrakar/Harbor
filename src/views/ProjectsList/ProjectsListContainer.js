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
    getDownloadIcon: props => project => {
      try {
        if (props.downloadedProjects[project.packageName].uploads[project.metadata.lastReleasedOn].downloaded) {
          return images.installIcon;
        }

        if (props.downloadedProjects[project.packageName].uploads[project.metadata.lastReleasedOn].downloading) {
          return images.downloadingIcon;
        }

        return images.downloadIcon;
      } catch (e) {
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
