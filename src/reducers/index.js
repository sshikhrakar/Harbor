import { combineReducers } from 'redux';

import ui from './uiReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  ui,
  auth,
});

export default rootReducer;
