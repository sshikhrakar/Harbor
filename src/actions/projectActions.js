import {
  FETCH_ALL_PROJECTS,
  FETCH_ALL_PROJECTS_ERRORED,
  FETCH_ALL_PROJECTS_FULFILLED,

  SET_SELECTED_PROJECT,

  INSTALL_APK,
} from './actionTypes';

/**
 * Fetch all projects from server.
 *
 * @returns {Object}
 */
export function fetchAllProjects() {
  return {
    type: FETCH_ALL_PROJECTS,
  };
}

/**
 * Error in fetching of all projects.
 *
 * @param {Object} error
 * @returns {Object}
 */
export function fetchAllProjectsErrored(error) {
  return {
    type: FETCH_ALL_PROJECTS_ERRORED,
    error,
  };
}

/**
 * Successful fetch of all projects.
 *
 * @param {Object} projects
 * @returns {Object}
 */
export function fetchAllProjectsFulfilled(projects) {
  return {
    type: FETCH_ALL_PROJECTS_FULFILLED,
    payload: {
      projects,
    },
  };
}

/**
 * Set a project as target, with its primary key.
 *
 * @param {String} projectKey
 * @returns {Object}
 */
export function setSelectedProject(projectKey) {
  return {
    type: SET_SELECTED_PROJECT,
    payload: {
      project: projectKey,
    },
  };
}

/**
 * Action to install a downloaded apk
 *
 * @param {string} apkPath local path to apk
 * @returns {Object}
 */
export function installApk(apkPath) {
  return {
    type: INSTALL_APK,
    payload: {
      apkPath,
    },
  };
}
