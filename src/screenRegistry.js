import { Navigation } from 'react-native-navigation';

import {
  HomePage,
  NewAccount,
  LandingPage,
} from './views';

/**
 * Registered namespaces for each view.
 */
export const screenRegistry = {
  HOME_PAGE: 'HOME_PAGE',
  NEW_ACCOUNT: 'NEW_ACCOUNT',
  LANDING_PAGE: 'LANDING_PAGE',
};

/**
 * Register each view which the navigator needs to jump to.
 *
 * @param {Object} store - Redux store.
 * @param {Component} Provider
 */
function registerScreens(store, Provider) {
  Navigation.registerComponent(screenRegistry.HOME_PAGE, () => HomePage, store, Provider);
  Navigation.registerComponent(screenRegistry.NEW_ACCOUNT, () => NewAccount, store, Provider);
  Navigation.registerComponent(screenRegistry.LANDING_PAGE, () => LandingPage, store, Provider);
}

export default registerScreens;
