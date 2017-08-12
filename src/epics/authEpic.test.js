import { Observable } from 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';

import authEpic from './authEpic';
import { loginViaEmail, loginViaEmailFulfilled, loginViaEmailErrored } from '../actions/authActions';


describe('EPICS: auth', () => {

  const store = null;
  let dependencies;
  let action$;

  beforeAll(() => {
    const email = 'foobar@gmail.com', password = 'foobar';
    action$ = ActionsObservable.of(loginViaEmail(email, password));
    const mockResponse = (email, password) => ({
      email,
      password,
    });

    dependencies = {
      firebaseService: {
        login(email, password) {
          return Observable.of(mockResponse(email, password));
        },
      },
    };
  });

  it('should dispatch errored action if error occurs, and fulfilled action if successful', () => {
    authEpic(action$, store, dependencies)
      .toArray() // buffers all emitted actions until your Epic naturally completes()
      .subscribe(actions => {
        expect(actions).toEqual([loginViaEmailFulfilled()]);
      }, errors => {
        expect(errors).toEqual([loginViaEmailErrored()]);
      });
  });

});
