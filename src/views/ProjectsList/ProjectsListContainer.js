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
import { withFCMHandlers } from '../../HOC';
import EmptyProjectsScreen from './EmptyProjectsScreen';

import { validators } from '../../utils';
import images from '../../config/images';
import { startDownload } from '../../actions/downloadActions';
import { fetchAllProjects, setSelectedProject } from '../../actions/projectActions';

const mapDispatchToProps = {
  startDownload,
  fetchAllProjects,
  setSelectedProject,
};

const mapStateToProps = state => ({
  projects: state.projects,
  isFetching: state.ui.projects.isFetching,
  isDownloading: state.downloads.isDownloading,
});

const enhance = compose(
  withFCMHandlers(),

  connect(mapStateToProps, mapDispatchToProps),

  withHandlers({
    onProjectListItemClicked: props => project => {
      if (props.isDownloading) {
        Alert.alert(
          'You cannot do that',
          'A download is already in progress. Please wait for it to finish before starting another one.'
        );
      } else {
        if (!project.metadata) {
          Alert.alert(
            'No updates available',
            'There aren\'t any builds available for this project right now.'
          );
        } else {
          props.startDownload(project, project.metadata.lastReleasedOn);
        }
      }
    },

    getDownloadIcon: props => project => { // eslint-disable-line
      try {
        if(project.uploads[project.metadata.lastReleasedOn].downloaded) {
          return images.installIcon;
        }

        if(project.uploads[project.metadata.lastReleasedOn].downloading) {
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
      this.props.fetchAllProjects();
    },
  }),

  branch(
    props => validators.isEmptyObject(props.projects) && !props.isFetching,
    renderComponent(EmptyProjectsScreen),
  ),
);

export default enhance(ProjectsList);
