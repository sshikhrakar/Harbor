import firebase from 'react-native-firebase';
import { Observable } from 'rxjs/Rx';

let databaseInstance;
let firebaseInstance;

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
}

/**
 * Login function.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Observable}
 */
function login(email: string, password: string): Observable {
  return Observable.fromPromise(
    firebaseInstance.auth().signInWithEmailAndPassword(email, password)
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
 * @param {Array} projects
 * @returns {Object}
 */
function normalizeProjectListToObject(projects) {
  return projects.reduce(
    (acc, current) => Object.assign(acc, { [current.name]: current }), {}
  );
}

export {
  init,
  login,
  signup,
  registerToken,
  fetchDetailsForProject,
  fetchProjectListForUser,
  normalizeProjectListToObject,
};
