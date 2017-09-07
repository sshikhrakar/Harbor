import {
  DOWNLOAD_STARTED,
  DOWNLOAD_ERRORED,
  DOWNLOAD_COMPLETED,
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
      };

    case DOWNLOAD_COMPLETED:
      return {
        ...state,
        isDownloading: false,
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
