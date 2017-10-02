import {
  DOWNLOAD_STARTED,
  DOWNLOAD_ERRORED,
  DOWNLOAD_COMPLETED,
  UPDATE_CURRENT_DOWNLOAD_PROGRESS,
} from '../actions/actionTypes';

const initialState = {
  isDownloading: false,
  currentDownload: null,
  projects: {},
};

/**
 * Reducer for 'state.downloads'.
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
function downloadsReducer(state = initialState, action) {
  switch(action.type) {

    case DOWNLOAD_STARTED:
      return {
        ...state,
        isDownloading: true,
        currentDownload: {
          ...action.payload.project,
          progress: 0,
        },
        projects: projectsReducer(state.projects, action),
      };

    case UPDATE_CURRENT_DOWNLOAD_PROGRESS:
      return {
        ...state,
        currentDownload: {
          ...state.currentDownload,
          progress: action.payload.progress,
        },
      };

    case DOWNLOAD_COMPLETED:
      return {
        ...state,
        isDownloading: false,
        currentDownload: {
          ...state.currentDownload,
          progress: 100,
        },
        projects: projectsReducer(state.projects, action),
      };

    case DOWNLOAD_ERRORED:
      return {
        ...state,
        isDownloading: false,
        projects: projectsReducer(state.projects, action),
      };

    default:
      return state;
  }
}

/**
 * Reducer for state.downloads.projects slice.
 * Not to be mixed with state.projects reducer.
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
function projectsReducer(state, action) {
  switch(action.type) {
    case DOWNLOAD_COMPLETED:
      return {
        ...state,
        [action.payload.project.packageName]: projectReducer(state[action.payload.project.packageName], action),
      };

    case DOWNLOAD_STARTED:
      return {
        ...state,
        [action.payload.project.packageName]: projectReducer(state[action.payload.project.packageName], action),
      };

    case DOWNLOAD_ERRORED:
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
function projectReducer(state = {}, action) {
  switch(action.type) {

    case DOWNLOAD_STARTED:
      return {
        ...state,
        uploads: {
          ...state.uploads,
          [action.payload.timestamp]: {
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

    case DOWNLOAD_ERRORED:
      return {
        ...state,
        uploads: {
          ...state.uploads,
          [action.payload.timestamp]: {
            ...state.uploads[action.payload.timestamp],
            downloading: false,
            downloaded: false,
          },
        },
      };

    default:
      return state;
  }
}

export default downloadsReducer;

/**
 * Selector for all downloaded projects.
 *
 * @param {Object} state
 * @returns {Object}
 */
export function getAllDownloadedProjects(state) {
  return state.projects;
}

/**
 * Selector for getting single downloaded project.
 *
 * @param {Object} state
 * @param {String} packageName
 * @returns {Object | undefined}
 */
export function getDownloadedProject(state, packageName) {
  const allProjects = getAllDownloadedProjects(state);

  return allProjects && allProjects[packageName];
}
