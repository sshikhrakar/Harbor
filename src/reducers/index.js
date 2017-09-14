import { combineReducers } from 'redux';

import ui from './uiReducer';
import fcm from './fcmReducer';
import auth from './authReducer';
import projects from './projectsReducer';
import downloads from './downloadsReducer';

const rootReducer = combineReducers({
  ui,
  fcm,
  auth,
  projects,
  downloads,
});

export default rootReducer;
