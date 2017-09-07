import { connect } from 'react-redux';
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
      props.startDownload(project);
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
