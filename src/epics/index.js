import { combineEpics } from 'redux-observable';

import * as fcm from './fcmEpic';
import * as auth from './authEpic';
import * as projects from './projectsEpic';

export default combineEpics(
  auth.loginEpic,
  auth.signupEpic,
  projects.startDownloadEpic,
  fcm.fcmTokenRegistrationEpic,
  projects.fetchAllProjectsEpic,
  projects.triggerApkInstall,
);
