import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import LandingPage from './LandingPage';
import { validators } from '../../utils';
import { loginViaEmail } from '../../actions/loginActions';

const mapDispatchToProps = {
  loginViaEmail,
};

const enhance = compose(
  withState('emailText', 'setEmailText', ''),
  withState('passwordText', 'setPasswordText', ''),
  withState('emailError', 'setEmailError', ''),

  connect(null, mapDispatchToProps),

  withHandlers({
    onLoginButtonPress: props => () => {
      if (validators.isValidEmail(props.emailText)) {
        props.setEmailError('');
        props.loginViaEmail(props.emailText, props.passwordText);
      } else {
        props.setEmailError('Please enter a valid email address.');
      }
    },
  }),

);

export default enhance(LandingPage);
