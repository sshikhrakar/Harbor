import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import { Navigation } from 'react-native-navigation';

import * as fs from './utils/fs';
import fonts from './config/fonts';
import colors from './config/colors';
import { firebaseService } from './services';
import configureStore from './configureStore';
import registerScreens, { screenRegistry } from './screenRegistry';

export const store = configureStore();

persistStore(store, {
  storage: AsyncStorage,
  blacklist: ['ui'],
});

registerScreens(store, Provider);

firebaseService.init();

(async () => {
  const basepath = fs.getBasePath();
  const exists = await fs.exists(basepath);
  if (!exists) {
    await fs.mkdir(basepath);
  }
})();

Navigation.startSingleScreenApp({
  screen: {
    screen: screenRegistry.LANDING_PAGE,
    title: 'Harbor',
    navigatorStyle: {
      navBarTextFontSize: 20,
      navBarTitleTextCentered: true,
      navBarComponentAlignment: 'center',
      navBarBackgroundColor: colors.WHITE,
      navBarTextFontFamily: fonts.primary.REGULAR,
    },
  },
});
