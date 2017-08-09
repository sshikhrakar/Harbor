import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase';

/**
 * Initializes a firebase app.
 *
 * @param {String} name
 * @param {Object} config
 */
function init(name, config = firebaseConfig) {
  return firebase.initializeApp({
    ...config,
  }, name);
}

/**
 * Returns the number of apps initialized by firebase.
 * Useful to check whether initalization is needed at the start of the app or not.
 *
 * @returns {Number}
 */
function getNumberOfApps() {
  return firebase.apps.length;
}

/**
 * Login function.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Observable}
 */
function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

/**
 * Sign up function.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Observable}
 */
function signup(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export {
  init,
  login,
  signup,
  getNumberOfApps,
};
