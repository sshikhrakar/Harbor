import {
  DOWNLOAD_STARTED,
  DOWNLOAD_ERRORED,
  DOWNLOAD_COMPLETED,
  UPDATE_CURRENT_DOWNLOAD_PROGRESS,
} from '../actions/actionTypes';

const initialState = {
  isDownloading: false,
  currentDownload: null,
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
      };

    case DOWNLOAD_ERRORED:
      return {
        ...state,
        isDownloading: false,
      };

    default:
      return state;
  }
}

export default downloadsReducer;
