import fcmReducer, { initialState } from './fcmReducer';
import { registerFcmTokenFulfilled } from '../actions/fcmActions';

describe('REDUCER: FCM', () => {

  it('should return initialState when state is undefined and action is empty', () => {
    expect(fcmReducer(undefined, {})).toEqual(initialState);
  });

  it('should receive registerFcmTokenFulfilled action and set state', () => {
    expect(fcmReducer(undefined, registerFcmTokenFulfilled())).toMatchSnapshot();
  });

});
