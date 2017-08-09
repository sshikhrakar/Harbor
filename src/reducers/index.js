import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  projects: (state = {}, action) => state, // eslint-disable-line
});

export default rootReducer;
