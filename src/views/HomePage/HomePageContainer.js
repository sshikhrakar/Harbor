import { connect } from 'react-redux';
import {
  compose,
  branch,
  lifecycle,
  renderComponent,
} from 'recompose';

import HomePage from './HomePage';
import { withFCMHandlers } from '../../HOC';
import EmptyProjectsScreen from './EmptyProjectsScreen';
import {
  fetchAllProjects,
} from '../../actions/projectActions';
import { validators } from '../../utils';

const mapDispatchToProps = {
  fetchAllProjects,
};

const mapStateToProps = state => ({
  projects: state.projects,
  isFetching: state.ui.projects.isFetching,
});

const enhance = compose(
  withFCMHandlers(),

  connect(mapStateToProps, mapDispatchToProps),

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

export default enhance(HomePage);
