import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import LandingPage from './LandingPage';
import { validators } from '../../utils';
import { loginViaEmail } from '../../actions/authActions';

const mapDispatchToProps = {
  loginViaEmail,
};

const enhance = compose(
  withState('emailText', 'setEmailText', 'srishanbhattarai@gmail.com'),
  withState('passwordText', 'setPasswordText', '123456'),
  withState('errorText', 'setErrorText', ''),

  connect(null, mapDispatchToProps),

  withHandlers({
    onLoginButtonPress: props => () => {
      if (!validators.isValidEmail(props.emailText)) {
        props.setErrorText('Please enter a valid email address.');
      } else if (!validators.isValidPassword(props.passwordText)) {
        props.setErrorText('Please enter a valid password.');
      } else {
        props.setErrorText('');
        props.loginViaEmail(props.emailText, props.passwordText);
      }
    },
  }),

);

export default enhance(LandingPage);
