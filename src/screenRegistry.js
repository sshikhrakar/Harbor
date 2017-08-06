import { Navigation } from 'react-native-navigation';

import {
  LandingPage,
} from './views';

/**
 * Registered namespaces for each view.
 */
export const screenRegistry = {
  LANDING_PAGE: 'landing_page',
};

/**
 * Register each view which the navigator needs to jump to.
 *
 * @param {Object} store - Redux store.
 * @param {Component} Provider
 */
function registerScreens(store, Provider) {
  Navigation.registerComponent(screenRegistry.LANDING_PAGE, () => LandingPage, store, Provider);
}

export default registerScreens;
