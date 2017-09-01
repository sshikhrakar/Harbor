import projectsReducer, { initialState } from './projectsReducer';
import {
  fetchAllProjectsFulfilled,
} from '../actions/projectActions';

describe('REDUCER: PROJECTS', () => {

  it('should render the initial state when state is undefined and action is an empty object', () => {
    expect(projectsReducer(undefined, {})).toEqual(initialState);
  });

  it('should set projects key when FETCH_ALL_PROJECTS_FULFILLED is received', () => {
    expect(projectsReducer(fetchAllProjectsFulfilled('data'), {})).toMatchSnapshot();
  });
});
