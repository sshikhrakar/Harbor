import LandingPage from './LandingPage';
import { compose, withHandlers } from 'recompose';
import { screenRegistry } from '../../screenRegistry';

const enhance = compose(

  withHandlers({
    onPress: ownerProps => () => {
      ownerProps.navigator.push({
        screen: screenRegistry.HOME_PAGE,
        backButtonHidden: true,
        title: 'Test Harbor',
      });
    },
  }),

);

export default enhance(LandingPage);

