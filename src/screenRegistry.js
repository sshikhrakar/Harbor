import { Navigation } from 'react-native-navigation';

import {
  HomePage,
  LandingPage,
  AddProjectPage,
} from './views';

/**
 * Registered namespaces for each view.
 */
export const screenRegistry = {
  HOME_PAGE: 'home_page',
  LANDING_PAGE: 'landing_page',
  ADD_PROJECT_PAGE: 'add_project_page',
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
  Navigation.registerComponent(screenRegistry.ADD_PROJECT_PAGE, () => AddProjectPage, store, Provider);
}

export default registerScreens;
