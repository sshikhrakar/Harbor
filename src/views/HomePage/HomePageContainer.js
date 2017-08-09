import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';

import HomePage from './HomePage';
import EmptyProjectsScreen from './EmptyProjectsScreen';

const mapStateToProps = state => ({
  projects: state.projects,
});

const enhance = compose(
  connect(mapStateToProps),

  branch(
    props => props.projects.length === 0,
    renderComponent(EmptyProjectsScreen)
  ),
);

export default enhance(HomePage);
