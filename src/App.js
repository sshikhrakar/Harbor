import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import { Navigation } from 'react-native-navigation';

import configureStore from './configureStore';
import registerScreens, { screenRegistry } from './screenRegistry';

export const store = configureStore();

persistStore(store, {
  storage: AsyncStorage,
});

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: screenRegistry.HOME_PAGE,
    title: 'Home Page',
  },
});
