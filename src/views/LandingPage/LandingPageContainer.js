import {
  compose,
  withState,
  withHandlers,
} from 'recompose';

import LandingPage from './LandingPage';
import { screenRegistry } from '../../screenRegistry';

const enhance = compose(

  withHandlers({
    onPress: ownerProps => () => {
      ownerProps.navigator.resetTo({
        screen: screenRegistry.HOME_PAGE,
        title: 'Test Harbor',
      });
    },
  }),

  withState('emailText', 'setEmailText', ''),

  withState('passwordText', 'setPasswordText', ''),
);

export default enhance(LandingPage);
