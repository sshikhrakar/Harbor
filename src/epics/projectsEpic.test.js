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
      val: () => ({ 1: 'a', 2: 'b', 3: 'c' }),
    };

    fetchAllProjectsAction$ = ActionsObservable.of(fetchAllProjects());

    dependencies = {
      firebaseService: {
        fetchProjectListForUser() {
          return Promise.resolve(mockdata);
        },

        fetchDetailsForProject(pid) {
          return Promise.resolve({
            val: () => ({
              name: pid,
            }),
          });
        },

        normalizeProjectListToObject(arr) {
          const obj = {};

          arr.map(data => Object.assign(obj, { [data.name]: data }));

          return obj;
        },
      },
    };
  });

  it('should dispatch errored action if projects could not be fetched.', () => {
    projects.fetchAllProjectsEpic(fetchAllProjectsAction$, store, dependencies)
      .toArray()
      .subscribe(null, e => {
        expect(e).toEqual([fetchAllProjectsErrored(e)]);
      });
  });

  it('should dispatch success action if projects are fetched successfully.', () => {
    projects.fetchAllProjectsEpic(fetchAllProjectsAction$, store, dependencies)
      .toArray()
      .subscribe(actions => {
        expect(actions).toEqual([fetchAllProjectsFulfilled({
          1: {
            name: '1',
          },
          2: {
            name: '2',
          },
          3: {
            name: '3',
          },
        })]);
      });
  });

});
