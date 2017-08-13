import {
  compose,
  withState,
  lifecycle,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import NewAccount from './NewAccount';

import { validators } from '../../utils';
import { signupViaEmail, signupViaEmailCancelled } from '../../actions/authActions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  isSigningUp: state.ui.auth.isSigningUp,  
  signupError: state.ui.auth.signupError,
});

const mapDispatchToProps = {
  signupViaEmail,  
  signupViaEmailCancelled,
};

export const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState('emailText', 'setEmailText', ''),
  withState('passwordText', 'setPasswordText', ''),
  withState('errorText', 'setErrorText', ''),

  withHandlers({
    onSubmit: props => () => {
      if (!validators.isValidEmail(props.emailText)) {
        props.setErrorText('Please enter a valid email address.');
      } else if (!validators.isValidPassword(props.passwordText)) {
        props.setErrorText('Please enter a valid password.');
      } else {
        props.signupViaEmail(props.emailText, props.passwordText);
        props.setErrorText('');
      }
    },

    onCancel: props => () => {
      props.signupViaEmailCancelled();
      props.setEmailText('');
      props.setPasswordText('');

      props.navigator.dismissModal({
        animationType: 'slide-down',
      });
    },
  }),

  lifecycle({
    componentWillReceiveProps(nextProps) {
      // if loggedin status changes from false => true
      // dismiss the modal, the branch in LandingPage is called,
      // Homepage is shown.
      if(!this.props.isLoggedIn && nextProps.isLoggedIn) { 
        this.props.navigator.dismissModal({
          animationType: 'slide-down',
        });
      } 
    },

    componentWillUnmount() {
      this.props.signupViaEmailCancelled();
    },
  }),
);

export default enhance(NewAccount);
