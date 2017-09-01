import {
  fetchAllProjects,
  fetchAllProjectsErrored,
  fetchAllProjectsFulfilled,
} from './projectActions';

describe('ACTIONS: projectActions', () => {

  it('should create an action to fetch all projects', () => {
    expect(fetchAllProjects()).toMatchSnapshot();
  });

  it('should create an error action for all projects fetched', () => {
    expect(fetchAllProjectsErrored()).toMatchSnapshot();
  });

  it('should create a success action for all projects fetched', () => {
    expect(fetchAllProjectsFulfilled('data')).toMatchSnapshot();
  });

});
