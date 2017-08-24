import { compose } from 'recompose';
import { connect } from 'react-redux';

import HomePage from './HomePage';

import { withFCMHandlers } from '../../HOC';
import { registerFcmToken } from '../../actions/authActions';

const mapDispatchToProps = {
  registerFcmToken,
};

const enhance = compose(
  connect(null, mapDispatchToProps),

  withFCMHandlers(),
);

export default enhance(HomePage);
