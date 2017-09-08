import {
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

    default:
      return state;
  }
}

export default projectsReducer;
