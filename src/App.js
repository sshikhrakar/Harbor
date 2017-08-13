import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import { Navigation } from 'react-native-navigation';

import { firebaseService } from './services';
import configureStore from './configureStore';
import registerScreens, { screenRegistry } from './screenRegistry';

export const store = configureStore();

persistStore(store, {
  storage: AsyncStorage,
  blacklist: ['ui'],
});

registerScreens(store, Provider);

if (firebaseService.getNumberOfApps() === 0) {
  firebaseService.init('HARBOR');
}

Navigation.startSingleScreenApp({
  screen: {
    screen: screenRegistry.LANDING_PAGE,
    navigatorStyle: {
      navBarHidden: true,
    },
  },
  animationType: 'slide-down',
});
