import { Navigation } from 'react-native-navigation';

import {
  NewAccount,
  LandingPage,
  ProjectsList,
} from './views';

/**
 * Registered namespaces for each view.
 */
export const screenRegistry = {
  NEW_ACCOUNT: 'NEW_ACCOUNT',
  LANDING_PAGE: 'LANDING_PAGE',
  PROJECTS_LIST: 'PROJECTS_LIST',
};

/**
 * Register each view which the navigator needs to jump to.
 *
 * @param {Object} store - Redux store.
 * @param {Component} Provider
 */
function registerScreens(store, Provider) {
  Navigation.registerComponent(screenRegistry.PROJECTS_LIST, () => ProjectsList, store, Provider);
  Navigation.registerComponent(screenRegistry.NEW_ACCOUNT, () => NewAccount, store, Provider);
  Navigation.registerComponent(screenRegistry.LANDING_PAGE, () => LandingPage, store, Provider);
}

export default registerScreens;
