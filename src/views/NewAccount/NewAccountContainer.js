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
  isSigningUp: state.ui.auth.isSigningUp,  
  signupError: state.ui.auth.signupError,
});

const mapDispatchToProps = {
  signupViaEmail,  
  signupViaEmailCancelled,
};

export const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState('emailText', 'setEmailText', 'srishanbhattarai@hotmail.com'),
  withState('passwordText', 'setPasswordText', '9841816353'),
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
    componentWillUnmount() {
      this.props.signupViaEmailCancelled();
    },
  }),
);

export default enhance(NewAccount);
