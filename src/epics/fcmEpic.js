import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import { REGISTER_FCM_TOKEN } from '../actions/actionTypes';
import {
  registerFcmTokenFulfilled,
  registerFcmTokenErrored,
} from '../actions/fcmActions';

/**
 * Register fcm tokens on the server.
 *
 * @param {Observable} action$
 * @param {Object} store
 * @param {Object} firebaseService
 * @returns {Observable}
 */
function fcmTokenRegistrationEpic(action$, store, { firebaseService }) {
  return action$
    .ofType(REGISTER_FCM_TOKEN)
    .debounceTime(1000)
    .switchMap(
      ({ payload }) => firebaseService
        .registerToken(payload.token)
        .mapTo(registerFcmTokenFulfilled())
        .catch(err => Observable.of(registerFcmTokenErrored(err)))
    );
}

export {
  fcmTokenRegistrationEpic,
};
