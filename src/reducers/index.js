import { combineReducers } from 'redux';

import ui from './uiReducer';
import auth from './authReducer';
import projects from './projectsReducer';

const rootReducer = combineReducers({
  ui,
  auth,
  projects,
});

export default rootReducer;
