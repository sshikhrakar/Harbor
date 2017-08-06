/*
 * This may need to be normalized to an object with dynamic keys later on.
 */
const initialState = [];

/**
 * The projects reducer is responsible for
 * storing all associated projects for the user.
 *
 * @param {Object} state=initialState
 * @param {Object} action
 * @returns {Object}
 */
function projectsReducer(state = initialState, action) {
  switch(action.type) {

    default:
      return state;

  }
}

export default projectsReducer;
