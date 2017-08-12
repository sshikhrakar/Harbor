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
  isLoggingIn: state.ui.auth.isLoggingIn,
  hasLoginErrored: state.ui.auth.hasLoginErrored,
});

const mapDispatchToProps = {
  loginViaEmail,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState('errorText', 'setErrorText', ''),
  withState('passwordText', 'setPasswordText', '123456'),
  withState('emailText', 'setEmailText', 'srishanbhattarai@gmail.com'),
  withState('createNewAccountEmailText', 'setCreateNewAccountPasswordText', '123456'),
  withState('createAccountModalVisibility', 'setCreateAccountModalVisibility', false),
  withState('createNewAccountEmailText', 'setCreateNewAccountEmailText', 'srishanbhattarai@gmail.com'),

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

    onCreateAccountPress: props => () => {
      props.setCreateAccountModalVisibility(true);
    },

    onCreateAccountModalClose: props => () => {
      props.setCreateNewAccountEmailText('');
      props.setCreateNewAccountPasswordText('');
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
