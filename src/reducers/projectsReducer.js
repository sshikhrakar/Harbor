import {
  DOWNLOAD_STARTED,
  DOWNLOAD_COMPLETED,
  FETCH_ALL_PROJECTS_FULFILLED,
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
        [action.payload.project.packageName]: projectReducer(state[action.payload.project.packageName], action),
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

    case DOWNLOAD_STARTED:
      return {
        ...state,
        uploads: {
          ...state.uploads,
          [action.payload.timestamp]: {
            ...state.uploads[action.payload.timestamp],
            downloading: true,
          },
        },
      };


    case DOWNLOAD_COMPLETED:
      return {
        ...state,
        uploads: {
          ...state.uploads,
          [action.payload.timestamp]: {
            ...state.uploads[action.payload.timestamp],
            downloading: false,
            downloaded: true,
            apkPath: action.payload.apkPath,
          },
        },
      };

    default:
      return state;
  }
}

export default projectsReducer;
