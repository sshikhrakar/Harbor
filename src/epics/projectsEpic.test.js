import { Observable } from 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';

import * as projects from './projectsEpic';
import {
  fetchAllProjects,
  fetchAllProjectsErrored,
  fetchAllProjectsFulfilled,
} from '../actions/projectActions';

describe('EPICS: projects', () => {

  const store = null;
  let dependencies;
  let fetchAllProjectsAction$;
  let mockdata;

  beforeAll(() => {
    mockdata = {
      val: () => 'data',
    };

    fetchAllProjectsAction$ = ActionsObservable.of(fetchAllProjects());

    dependencies = {
      firebaseService: {
        fetchAllProjects() {
          return Observable.of(mockdata);
        },
      },
    };
  });

  it('should dispatch errored action if projects could not be fetched.', () => {
    projects.fetchAllProjectsEpic(fetchAllProjectsAction$, store, dependencies)
      .toArray()
      .subscribe(null, e => {
        expect(e).toEqual([fetchAllProjectsErrored()]);
      });
  });

  it('should dispatch success action if projects are fetched successfully.', () => {
    projects.fetchAllProjectsEpic(fetchAllProjectsAction$, store, dependencies)
      .toArray()
      .subscribe(actions => {
        expect(actions).toEqual([fetchAllProjectsFulfilled(mockdata.val())]);
      });
  });

});
