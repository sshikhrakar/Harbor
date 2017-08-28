import { Observable } from 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';

import * as auth from './authEpic';
import {
  loginViaEmail,
  loginViaEmailFulfilled,
  loginViaEmailErrored,
  signupViaEmailFulfilled,
  signupViaEmailErrored,
  signupViaEmail,
} from '../actions/authActions';


describe('EPICS: auth', () => {

  const store = null;
  let dependencies;
  let loginAction$;
  let signupAction$;

  beforeAll(() => {
    const email = 'foobar@gmail.com', password = 'foobar';

    loginAction$ = ActionsObservable.of(loginViaEmail(email, password));
    signupAction$ = ActionsObservable.of(signupViaEmail(email, password));

    const mockResponse = (email, password) => ({
      email,
      password,
    });

    dependencies = {
      firebaseService: {
        login(email, password) {
          return Observable.of(mockResponse(email, password));
        },

        signup(email, password) {
          return Observable.of(mockResponse(email, password));
        },
      },
    };
  });

  it('should dispatch login errored action if error occurs, and fulfilled action if successful', () => {
    auth.loginEpic(loginAction$, store, dependencies)
      .toArray() // buffers all emitted actions until your Epic naturally completes()
      .subscribe(actions => {
        expect(actions).toEqual([loginViaEmailFulfilled()]);
      }, errors => {
        expect(errors).toEqual([loginViaEmailErrored()]);
      });
  });

  it('should dispatch signup errored action if error occurs, and fulfilled action if successful', () => {
    auth.signupEpic(signupAction$, store, dependencies)
      .toArray() // buffers all emitted actions until your Epic naturally completes()
      .subscribe(actions => {
        expect(actions).toEqual([signupViaEmailFulfilled()]);
      }, errors => {
        expect(errors).toEqual([signupViaEmailErrored()]);
      });
  });


});
