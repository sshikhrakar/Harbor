import {
  compose,
  withState,
  lifecycle,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import LandingPage from './LandingPage';
import { validators } from '../../utils';
import { loginViaEmail } from '../../actions/auth';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  hasLoginErrored: state.auth.hasLoginErrored,
});

const mapDispatchToProps = {
  loginViaEmail,
};

const enhance = compose(
  withState('emailText', 'setEmailText', 'srishanbhattarai@gmail.com'),
  withState('passwordText', 'setPasswordText', '123456'),
  withState('errorText', 'setErrorText', ''),

  connect(mapStateToProps, mapDispatchToProps),

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

  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.hasLoginErrored) {
        this.setState({
          errorText: 'Cannot login. Please make sure your credentials are valid.',
        });
      }
    },
  }),

);

export default enhance(LandingPage);
