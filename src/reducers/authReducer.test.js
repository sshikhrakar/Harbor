import authReducer, { initialState } from './authReducer';

describe('REDUCER: AUTH', () => {

  it('should return initialState when state is undefined and action is empty', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

});
