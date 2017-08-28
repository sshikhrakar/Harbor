import * as fcmActions from './fcmActions';

describe('ACTION CREATORS: FCM', () => {
  it('should create registration action', () => {
    expect(fcmActions.registerFcmToken('foobarbaz1234foobarfaz1234')).toMatchSnapshot();
  });

  it('should create registration success action', () => {
    expect(fcmActions.registerFcmTokenFulfilled()).toMatchSnapshot();
  });

  it('should create registration failure action', () => {
    expect(fcmActions.registerFcmTokenErrored()).toMatchSnapshot();
  });

});
