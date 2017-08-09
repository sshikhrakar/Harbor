import { Navigation } from 'react-native-navigation';

import {
  HomePage,
  LandingPage,
} from './views';

/**
 * Registered namespaces for each view.
 */
export const screenRegistry = {
  HOME_PAGE: 'home_page',
  LANDING_PAGE: 'landing_page',
};

/**
 * Register each view which the navigator needs to jump to.
 *
 * @param {Object} store - Redux store.
 * @param {Component} Provider
 */
function registerScreens(store, Provider) {
  Navigation.registerComponent(screenRegistry.HOME_PAGE, () => HomePage, store, Provider);
  Navigation.registerComponent(screenRegistry.LANDING_PAGE, () => LandingPage, store, Provider);
}

export default registerScreens;
