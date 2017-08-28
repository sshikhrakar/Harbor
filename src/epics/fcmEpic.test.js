import { Observable } from 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';
import {
  registerFcmToken,
  registerFcmTokenErrored,
  registerFcmTokenFulfilled,
} from '../actions/fcmActions';
import * as fcm from './fcmEpic';

describe('EPICS: FCM', () => {

  let dependencies = null;
  const store = null;
  let registrationAction$;

  beforeAll(() => {
    const mockResponse = (token) => ({
      code: 200,
      token,
    });

    const sampleToken = 'foobarbaz1234foobarfaz1234';

    registrationAction$ = ActionsObservable.of(registerFcmToken(sampleToken));

    dependencies = {
      firebaseService: {
        registerToken(token) {
          return Observable.of(mockResponse(token));
        },
      },
    };

  });

  it('should dispatch fulfilled success action if fcm token is successfully registered', () => {
    fcm.fcmTokenRegistrationEpic(registrationAction$, store, dependencies)
      .toArray()
      .subscribe(actions => {
        expect(actions).toEqual([registerFcmTokenFulfilled()]);
      }, null);
  });

  it('should dispatch errored success action if fcm token is not registered', () => {
    fcm.fcmTokenRegistrationEpic(registrationAction$, store, dependencies)
      .toArray()
      .subscribe(null, errors => {
        expect(errors).toEqual([registerFcmTokenErrored()]);
      });
  });

});
