import {
  LOGIN_VIA_EMAIL,
  LOGIN_VIA_EMAIL_ERRORED,
  LOGIN_VIA_EMAIL_FULFILLED,

  SIGNUP_VIA_EMAIL,
  SIGNUP_VIA_EMAIL_ERRORED,
  SIGNUP_VIA_EMAIL_FULFILLED,
  SIGNUP_VIA_EMAIL_CANCELLED,

  FETCH_ALL_PROJECTS,
  FETCH_ALL_PROJECTS_ERRORED,
  FETCH_ALL_PROJECTS_FULFILLED,

  SET_SELECTED_PROJECT,
} from '../actions/actionTypes';

export const initialState = {
  auth: {
    isLoggingIn: false,
    hasLoginErrored: false,
    isSigningUp: false,
    hasSignupErrored: false,
    signupError: '',
  },
  projects: {
    isFetching: false,
    hasErrored: false,
    selectedProject: null,
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

    case LOGIN_VIA_EMAIL:
      return {
        ...state,
        auth: uiAuthReducer(state.auth, action),
      };

    case LOGIN_VIA_EMAIL_FULFILLED:
      return {
        ...state,
        auth: uiAuthReducer(state.auth, action),
      };

    case LOGIN_VIA_EMAIL_ERRORED:
      return {
        ...state,
        auth: uiAuthReducer(state.auth, action),
      };

    case SIGNUP_VIA_EMAIL:
      return {
        ...state,
        auth: uiAuthReducer(state.auth, action),
      };

    case SIGNUP_VIA_EMAIL_FULFILLED:
      return {
        ...state,
        auth: uiAuthReducer(state.auth, action),
      };

    case SIGNUP_VIA_EMAIL_ERRORED:
      return {
        ...state,
        auth: uiAuthReducer(state.auth, action),
      };

    case SIGNUP_VIA_EMAIL_CANCELLED:
      return {
        ...state,
        auth: uiAuthReducer(state.auth, action),
      };

    case FETCH_ALL_PROJECTS:
      return {
        ...state,
        projects: uiProjectsReducer(state.projects, action),
      };

    case FETCH_ALL_PROJECTS_ERRORED:
      return {
        ...state,
        projects: uiProjectsReducer(state.projects, action),
      };

    case FETCH_ALL_PROJECTS_FULFILLED:
      return {
        ...state,
        projects: uiProjectsReducer(state.projects, action),
      };

    case SET_SELECTED_PROJECT:
      return {
        ...state,
        projects: uiProjectsReducer(state.projects, action),
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
    case LOGIN_VIA_EMAIL:
      return {
        ...state,
        isLoggingIn: true,
      };

    case LOGIN_VIA_EMAIL_FULFILLED:
      return {
        ...state,
        isLoggingIn: false,
        hasLoginErrored: false,
      };

    case LOGIN_VIA_EMAIL_ERRORED:
      return {
        ...state,
        isLoggingIn: false,
        hasLoginErrored: true,
      };

    case SIGNUP_VIA_EMAIL:
      return {
        ...state,
        signupError: '',
        isSigningUp: true,
      };

    case SIGNUP_VIA_EMAIL_FULFILLED:
      return {
        ...state,
        signupError: '',
        isSigningUp: false,
        hasSignupErrored: false,
      };

    case SIGNUP_VIA_EMAIL_ERRORED:
      return {
        ...state,
        isSigningUp: false,
        hasSignupErrored: true,
        signupError: action.payload.error,
      };

    case SIGNUP_VIA_EMAIL_CANCELLED:
      return {
        ...state,
        signupError: '',
        isSigningUp: false,
        hasSignupErrored: false,
      };

    default:
      return state;
  }
}

/**
 * Reducer for the ui.projects state slice.
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
function uiProjectsReducer(state, action) {
  switch(action.type) {
    case FETCH_ALL_PROJECTS:
      return {
        ...state,
        isFetching: true,
        hasErrored: false,
      };

    case FETCH_ALL_PROJECTS_ERRORED:
      return {
        ...state,
        isFetching: false,
        hasErrored: true,
      };

    case FETCH_ALL_PROJECTS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        hasErrored: true,
      };

    case SET_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: action.payload.project,
      };

    default:
      return state;
  }
}

/**
 * Selector for currently selected project.
 * This only returns the id(pacakgename) of the project.
 *
 * @param {Object} state
 * @returns {String}
 */
export function getSelectedProjectPackageName(state) {
  return state.projects.selectedProject;
}
