import { combineEpics } from 'redux-observable';

import * as auth from './authEpic';

export default combineEpics(
  auth.loginEpic,
  auth.signupEpic,
  auth.fcmTokenRegistrationEpic,
);
