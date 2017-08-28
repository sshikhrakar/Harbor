import { combineEpics } from 'redux-observable';

import * as fcm from './fcmEpic';
import * as auth from './authEpic';

export default combineEpics(
  auth.loginEpic,
  auth.signupEpic,
  fcm.fcmTokenRegistrationEpic,
);
