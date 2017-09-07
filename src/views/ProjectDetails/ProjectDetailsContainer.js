import { compose } from 'recompose';
import { connect } from 'react-redux';

import ProjectDetails from './ProjectDetails';

const mapStateToProps = state => ({
  selectedProject: state.ui.projects.selectedProject,
});

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(ProjectDetails);
