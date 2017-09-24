import { combineReducers } from 'redux';

import ui, * as fromUi from './uiReducer';
import fcm from './fcmReducer';
import auth from './authReducer';
import projects from './projectsReducer';
import downloads, * as fromDownloads from './downloadsReducer';

const rootReducer = combineReducers({
  ui,
  fcm,
  auth,
  projects,
  downloads,
});

export default rootReducer;

/**
 * A selector to get project info for a specific project.
 *
 * @param {Object} state
 * @param {String} packageName
 * @returns {Object}
 */
export function getProject(state, packageName) {
  return state.projects[packageName];
}

/**
 * A selector to get currently selected project.
 *
 * @param {Object} state
 * @returns {Object}
 */
export function getSelectedProject(state) {
  const currentPackage = fromUi.getSelectedProjectPackageName(state.ui);

  return getProject(state, currentPackage);
}

/**
 * A selector to get download info for a project.
 *
 * @param {Object} state
 * @param {String} packageName
 * @returns {Object | undefined}
 */
export function getDownloadInfoForProject(state, packageName) {
  return fromDownloads.getDownloadedProject(state.downloads, packageName);
}

/**
 * A selector to get download info for currently selected project.
 *
 * @param {Object} state
 * @returns {Object | undefined}
 */
export function getDownloadInfoForSelectedProject(state) {
  const currentPackage = fromUi.getSelectedProjectPackageName(state.ui);

  return getDownloadInfoForProject(state, currentPackage);
}
