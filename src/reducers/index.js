import { combineReducers } from 'redux';

import ui from './uiReducer';
import auth from './authReducer';
import projects from './projectsReducer';
import downloads from './downloadsReducer';

const rootReducer = combineReducers({
  ui,
  auth,
  projects,
  downloads,
});

export default rootReducer;
