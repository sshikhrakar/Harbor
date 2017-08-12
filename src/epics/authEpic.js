import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Rx';

import { LOGIN_VIA_EMAIL } from '../actions/actionTypes';
import { loginViaEmailFulfilled, loginViaEmailErrored } from '../actions/authActions';

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
    .switchMap(({ payload }) => firebaseService.login(payload.email, payload.password))
    .map(data => loginViaEmailFulfilled(data))
    .catch(err => Observable.of(loginViaEmailErrored(err)));
}

export default loginEpic;
