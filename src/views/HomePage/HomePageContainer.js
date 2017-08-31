import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import HomePage from './HomePage';
import {
  fetchAllProjects,
} from '../../actions/projectActions';

const mapDispatchToProps = {
  fetchAllProjects,
};

const enhance = compose(
  connect(null, mapDispatchToProps),

  lifecycle({
    componentDidMount() {
      this.props.fetchAllProjects();
    },
  }),

);

export default enhance(HomePage);
