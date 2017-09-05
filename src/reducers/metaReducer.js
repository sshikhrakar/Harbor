const initialState = {
  downloads: {
    isDownloading: false,
    currentDownload: null,
  },
};

/**
 * A reducer of meta objects that should not be volatile but arent related to any other reducer.
 *
 * @param {Object} state=initialState
 * @param {Object} action
 * @returns {Object}
 */
function metaReducer(state = initialState, action) {
  switch(action.type) {

    case DOWNLOAD_STARTED:
      return {
        ...state,
        downloads: downloadsReducer(state.downloads, action),
      };

    case DOWNLOAD_COMPLETE:
      return {
        ...state,
        downloads: downloadsReducer(state.downloads, action),
      };

    default:
      return state;
  }
}

/**
 * Reducer for 'state.meta.downloads'
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
function downloadsReducer(state, action) {
  switch(action.type) {

    case DOWNLOAD_STARTED:
      return {
        ...state,
      };

    case DOWNLOAD_COMPLETE:
      return {
        ...state,
      };
  }
}

export default metaReducer;
