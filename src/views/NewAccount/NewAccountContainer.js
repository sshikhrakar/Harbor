import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import NewAccount from './NewAccount';

import { signupViaEmail } from '../../actions/authActions';

const mapStateToProps = (state) => ({
  isSigningUp: state.ui.auth.isSigningUp,  
  hasSignUpErrored: state.ui.hasSignUpErrored,
});

const mapDispatchToProps = {
  signupViaEmail,  
};

export const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState('emailText', 'setEmailText', ''),
  withState('passwordText', 'setPasswordText', ''),

  withHandlers({
    onSubmit: props => () => {
      props.signupViaEmail(props.emailText, props.passwordText);
    },

    onCancel: props => () => {
      props.navigator.dismissModal({
        animationType: 'slide-down',
      });
    },
  }),
);

export default enhance(NewAccount);
