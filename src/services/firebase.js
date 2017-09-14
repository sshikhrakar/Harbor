import firebase from 'react-native-firebase';
import { Observable } from 'rxjs/Rx';

import { store } from '../App';
import { refreshFcmToken } from '../actions/fcmActions';

let databaseInstance;
let firebaseInstance;

/**
 * Returns the current instance of firebase.
 *
 * @returns {Object}
 */
function getInstance() {
  return firebaseInstance;
}

/**
 * Initializes a firebase app.
 *
 * @param {String} name
 * @param {Object} config
 */
function init() {
  firebaseInstance = firebase.initializeApp({
    debug: true,
  });

  databaseInstance = firebaseInstance.database();
  firebaseInstance.messaging().onTokenRefresh(onTokenRefresh);
}

/**
 * When FCM token is refreshed, we dispatch an action to indicate the event.
 * fcmEpic handles the update.
 *
 * @param {String} token
 */
function onTokenRefresh(token) {
  store.dispatch(refreshFcmToken(token));
}

/**
 * Login function.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Observable}
 */
function login(email, password) {
  return Observable.fromPromise(
    firebaseInstance.auth().signInWithEmailAndPassword(email, password)
  );
}

/**
 * Gets an FCM token.
 *
 * @returns {Observable}
 */
function getToken() {
  return Observable.fromPromise(
    getInstance().messaging().getToken()
  );
}

/**
 * Sign up function.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Observable}
 */
function signup(email, password) {
  return Observable.fromPromise(
    firebaseInstance.auth().createUserWithEmailAndPassword(email, password)
  );
}

/**
 * Register FCM token on the database.
 *
 * @param {String} token
 * @returns {Observable}
 */
function registerToken(token) {
  return Observable.fromPromise(
    databaseInstance.ref('users/' + firebaseInstance.auth().currentUser.uid + '/fcmTokens').update({
      [token]: true,
    })
  );
}

/**
 * Fetch project list for user from Firebase.
 *
 * @returns {Promise}
 */
function fetchProjectListForUser() {
  return databaseInstance.ref('members/' + firebaseInstance.auth().currentUser.uid).once('value');
}

/**
 * Fetch details for one project.
 *
 * @param {String} projectId
 * @returns {Promise}
 */
function fetchDetailsForProject(projectId) {
  return databaseInstance.ref('projects/' + projectId).once('value');
}

/**
 * A helper to sanitize a list of projects into an object of dynamic project keys.
 *
 * @param {Array} rawProjects - unsanitized project list.
 * @returns {Object}
 */
function normalizeProjectListToObject(rawProjects) {
  if (!rawProjects.length) return {};

  const projects = rawProjects.map(p => p.val());

  return projects.reduce(
    (acc, current) => Object.assign(acc, { [current.packageName]: current }), {}
  );
}

export {
  init,
  login,
  signup,
  getToken,
  getInstance,
  registerToken,
  fetchDetailsForProject,
  fetchProjectListForUser,
  normalizeProjectListToObject,
};
