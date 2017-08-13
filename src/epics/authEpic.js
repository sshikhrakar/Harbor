import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Rx';

import {
  LOGIN_VIA_EMAIL,
  SIGNUP_VIA_EMAIL,
  SIGNUP_VIA_EMAIL_CANCELLED,
} from '../actions/actionTypes';
import {
  loginViaEmailErrored,
  loginViaEmailFulfilled,
  signupViaEmailErrored,
  signupViaEmailFulfilled,
} from '../actions/authActions';

/**
 * Login epic.
 *
 * @param {Observable} action$
 * @param {Object} store
 * @param {Object} loginService
 * @returns {Observable}
 */
function loginEpic(action$, store, { firebaseService }) { // eslint-disable-line no-unused-vars
  return action$
    .ofType(LOGIN_VIA_EMAIL)
    .debounceTime(1000)
    .switchMap(
      ({ payload }) => firebaseService
        .login(payload.email, payload.password)
        .mapTo(loginViaEmailFulfilled())
        .catch(() => Observable.of(loginViaEmailErrored()))
    );
}

/**
 * Signup epic.
 *
 * @param {Observable} action$
 * @param {Object} store
 * @param {Object} loginService
 * @returns {Observable}
 */
function signupEpic(action$, store, { firebaseService }) { // eslint-disable-line no-unused-vars
  return action$
    .ofType(SIGNUP_VIA_EMAIL)
    .debounceTime(1000)
    .switchMap(
      ({ payload }) => firebaseService
        .signup(payload.email, payload.password)
        .takeUntil(action$.ofType(SIGNUP_VIA_EMAIL_CANCELLED))
        .mapTo(signupViaEmailFulfilled())
        .catch(() => Observable.of(signupViaEmailErrored()))
    );
}

export {
  loginEpic,
  signupEpic,
};
