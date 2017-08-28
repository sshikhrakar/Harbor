import { REGISTER_FCM_TOKEN_FULFILLED } from '../actions/actionTypes';

export const initialState = {
  fcmTokenRegistered: false,
};

/**
 * Reducer for firebase FCM state.
 *
 * @param {Object} state=initialState
 * @param {Object} action
 * @returns {Object}
 */
function fcmReducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_FCM_TOKEN_FULFILLED:
      return {
        ...state,
        fcmTokenRegistered: true,
      };

    default:
      return state;
  }
}

export default fcmReducer;
