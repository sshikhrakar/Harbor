import {
  FETCH_ALL_PROJECTS,
  FETCH_ALL_PROJECTS_ERRORED,
  FETCH_ALL_PROJECTS_FULFILLED,
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
