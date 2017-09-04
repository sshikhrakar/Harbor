import uiReducer, { initialState } from './uiReducer';
import {
  loginViaEmail,
  loginViaEmailFulfilled,
  loginViaEmailErrored,
  signupViaEmail,
  signupViaEmailFulfilled,
  signupViaEmailErrored,
  signupViaEmailCancelled,
} from '../actions/authActions';
import {
  fetchAllProjects,
  fetchAllProjectsFulfilled,
  fetchAllProjectsErrored,

  setSelectedProject,
} from '../actions/projectActions';

describe('REDUCER: UI', () => {

  it('should render the initial state when state is undefined and action is an empty object', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isLoggingIn to true when loginViaEmail is received', () => {
    const email = 'foobar@gmail.com';
    const password = 'foobar';

    expect(
      uiReducer(undefined, loginViaEmail(email, password))
    ).toMatchSnapshot();
  });


  it('should clear isLoggingIn and error when loginViaEmailFulfilled is received', () => {
    expect(
      uiReducer({
        ...initialState,
        auth: {
          ...initialState.auth,
          isLoggingIn: Math.random() > 0.5 ? false : true,
          hasLoginErrored: Math.random() > 0.5 ? false : true,
        },
      }, loginViaEmailFulfilled())
    ).toMatchSnapshot();
  });


  it('should set hasLoginErrored and clear isLoggingIn when loginViaEmailErrored is received', () => {
    expect(
      uiReducer({
        ...initialState,
        auth: {
          ...initialState.auth,
          isLoggingIn: Math.random() > 0.5 ? true : false,
          hasLoginErrored: Math.random() > 0.5 ? true : false,
        },
      }, loginViaEmailErrored())
    ).toMatchSnapshot();
  });


  it('should set isSigningUp to true when signupViaEmail is received', () => {
    expect(
      uiReducer({
        ...initialState,
        auth: {
          ...initialState.auth,
          isSigningUp: Math.random() > 0.5 ? true : false,
        },
      }, signupViaEmail())
    ).toMatchSnapshot();
  });

  it('should set isSigningUp and hasSignupErrored to false when signupViaEmailFulfilled is received', () => {
    expect(
      uiReducer({
        ...initialState,
        auth: {
          ...initialState.auth,
          isSigningUp: Math.random() > 0.5 ? true : false,
          hasSignupErrored: Math.random() > 0.5 ? true : false,
        },
      }, signupViaEmailFulfilled())
    ).toEqual({
      ...initialState,
      auth: {
        ...initialState.auth,
        isSigningUp: false,
        hasSignupErrored: false,
      },
    });
  });

  it('should set isSigningUp to false and hasSignupErrored to true when signupViaEmailErrored is received', () => {
    expect(
      uiReducer({
        ...initialState,
        auth: {
          ...initialState.auth,
          isSigningUp: Math.random() > 0.5 ? true : false,
          hasSignupErrored: Math.random() > 0.5 ? true : false,
        },
      }, signupViaEmailErrored({
        code: 'duplicate id',
        message: 'email already exists',
      }))
    ).toMatchSnapshot();
  });


  it('should set isSigningUp to false and hasSignupErrored to true when signupViaEmailErrored is received', () => {
    expect(
      uiReducer({
        ...initialState,
        auth: {
          ...initialState.auth,
          isSigningUp: Math.random() > 0.5 ? true : false,
          hasSignupErrored: Math.random() > 0.5 ? true : false,
        },
      }, signupViaEmailCancelled())
    ).toMatchSnapshot();
  });

  it('should set selectedProject', () => {
    expect(
      uiReducer(initialState, setSelectedProject('projectKey'))
    ).toMatchSnapshot();
  });

  it('should set loading values for fetchAllProject', () => {
    expect(
      uiReducer(initialState, fetchAllProjects())
    ).toMatchSnapshot();
  });

  it('should set loading values for fetchAllProjectsFulfilled', () => {
    expect(
      uiReducer(initialState, fetchAllProjectsFulfilled())
    ).toMatchSnapshot();
  });

  it('should set loading values for fetchAllProjectsErrored', () => {
    expect(
      uiReducer(initialState, fetchAllProjectsErrored())
    ).toMatchSnapshot();
  });

});
