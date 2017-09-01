import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import HomePage from './HomePage';
import {
  fetchAllProjects,
} from '../../actions/projectActions';

const mapDispatchToProps = {
  fetchAllProjects,
};

const mapStateToProps = state => ({
  projects: state.projects,
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  lifecycle({
    componentDidMount() {
      this.props.fetchAllProjects();
    },
  }),

);

export default enhance(HomePage);
