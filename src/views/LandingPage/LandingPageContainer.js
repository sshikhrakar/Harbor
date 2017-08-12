import {
  branch,
  compose,
  withState,
  lifecycle,
  withHandlers,
  renderComponent,
} from 'recompose';
import { connect } from 'react-redux';

import HomePage from '../HomePage';
import LandingPage from './LandingPage';

import { validators } from '../../utils';
import { loginViaEmail } from '../../actions/authActions';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoggingIn: state.auth.isLoggingIn,
  hasLoginErrored: state.auth.hasLoginErrored,
});

const mapDispatchToProps = {
  loginViaEmail,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState('emailText', 'setEmailText', 'srishanbhattarai@gmail.com'),
  withState('passwordText', 'setPasswordText', '123456'),
  withState('errorText', 'setErrorText', ''),

  branch(
    props => props.isLoggedIn,
    renderComponent(HomePage),
  ),

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

    onCreateAccountPress: props => () => { // eslint-disable-line
      console.warn('onCreateAccountPress'); // eslint-disable-line
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
