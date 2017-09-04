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

import fonts from '../../config/fonts';
import colors from '../../config/colors';
import { validators } from '../../utils';
import { screenRegistry } from '../../screenRegistry';
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
    onProjectListItemClicked: props => projectKey => {
      props.setSelectedProject(projectKey);

      props.navigator.push({
        screen: screenRegistry.PROJECT_DETAILS,
        title: projectKey,
        navigatorStyle: {
          navBarTextFontSize: 20,
          navBarTitleTextCentered: true,
          navBarComponentAlignment: 'center',
          navBarBackgroundColor: colors.SILVER,
          navBarTextFontFamily: fonts.primary.REGULAR,
        },
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
