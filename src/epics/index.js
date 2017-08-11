import { combineEpics } from 'redux-observable';

import auth from './authEpic';

export default combineEpics(
  auth,
);
