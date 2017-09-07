import {
  FETCH_ALL_PROJECTS_FULFILLED,
  DOWNLOAD_COMPLETED,
} from '../actions/actionTypes';

export const initialState = {};

/**
 * Reducer for projects.
 *
 * @param {Object} state=initialState
 * @param {Object} action
 * @returns {Object}
 */
function projectsReducer(state = initialState, action) {
  switch(action.type) {

    case FETCH_ALL_PROJECTS_FULFILLED:
      return {
        ...action.payload.projects,
      };

    case DOWNLOAD_COMPLETED:
      return {
        ...state,
        [action.payload.project.name]: projectReducer(state[action.payload.project.name], action),
      };

    default:
      return state;
  }
}

/**
 * Reducer for a single project.
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
function projectReducer(state, action) {
  switch(action.type) {

    case DOWNLOAD_COMPLETED:
      return {
        ...state,
        uploads: {
          [action.payload.timestamp]: {
            ...state.uploads[action.payload.timestamp],
            downloaded: true,
          },
        },
      };

    default:
      return state;
  }
}

export default projectsReducer;
