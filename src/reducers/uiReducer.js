import * as actionTypes from '../actions/actionTypes';

export const initialState = {
  auth: {
    isLoggingIn: false,
    hasLoginErrored: false,
  },
};

/**
 * Holds the UI state for many parts of the app.
 * This reducer key will not be persisted into storage.
 *
 * @param {Object} state=initialState
 * @param {Object} action
 * @returns {Object}
 */
function uiReducer(state = initialState, action) {
  switch(action.type) {

    case actionTypes.LOGIN_VIA_EMAIL:
      return {
        ...state,
        auth: uiAuthReducer(state.auth, action),
      };

    case actionTypes.LOGIN_VIA_EMAIL_FULFILLED:
      return {
        ...state,
        auth: uiAuthReducer(state.auth, action),
      };

    case actionTypes.LOGIN_VIA_EMAIL_ERRORED:
      return {
        ...state,
        auth: uiAuthReducer(state.auth, action),
      };

    default:
      return state;
  }
}

export default uiReducer;

/**
 * Reducer for the ui.Auth state slice.
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
function uiAuthReducer(state, action) {
  switch(action.type) {
    case actionTypes.LOGIN_VIA_EMAIL:
      return {
        ...state,
        isLoggingIn: true,
      };

    case actionTypes.LOGIN_VIA_EMAIL_FULFILLED:
      return {
        ...state,
        isLoggingIn: false,
        hasLoginErrored: false,
      };

    case actionTypes.LOGIN_VIA_EMAIL_ERRORED:
      return {
        ...state,
        isLoggingIn: false,
        hasLoginErrored: true,
      };
  }
}
