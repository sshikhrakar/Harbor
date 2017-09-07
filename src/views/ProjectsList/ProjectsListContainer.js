import { connect } from 'react-redux';
import {
  compose,
  branch,
  lifecycle,
  withHandlers,
  renderComponent,
} from 'recompose';

import * as downloadService from '../../services/downloadService';

import ProjectsList from './ProjectsList';
import { withFCMHandlers } from '../../HOC';
import EmptyProjectsScreen from './EmptyProjectsScreen';

import { validators } from '../../utils';
import { fetchAllProjects, setSelectedProject } from '../../actions/projectActions';

const mapDispatchToProps = {
  fetchAllProjects,
  setSelectedProject,
};

const mapStateToProps = state => ({
  projects: state.projects,
  isFetching: state.ui.projects.isFetching,
});

const enhance = compose(
  withFCMHandlers(),

  connect(mapStateToProps, mapDispatchToProps),

  withHandlers({
    onProjectListItemClicked: props => project => { // eslint-disable-line
      const { lastReleasedOn } = project.metadata;
      const downloadUrl = project.uploads[lastReleasedOn].download_url;

      downloadService.downloadApk({
        projectName: project.name,
        releaseTimestamp: lastReleasedOn,
        url: downloadUrl,
      });
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
