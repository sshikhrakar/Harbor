import { ActionsObservable } from 'redux-observable';

import * as projects from './projectsEpic';
import {
  fetchAllProjects,
  fetchAllProjectsErrored,
  fetchAllProjectsFulfilled,
} from '../actions/projectActions';
import {
  installApk,
  installApkErrored,
  installApkFulfilled,
} from '../actions/apkActions';

describe('EPICS: projects', () => {

  const store = null;
  let dependencies;
  let fetchAllProjectsAction$;
  let installApkAction$;
  let mockdata;

  beforeAll(() => {
    mockdata = {
      val: () => ({ 1: 'a', 2: 'b', 3: 'c' }),
    };

    fetchAllProjectsAction$ = ActionsObservable.of(fetchAllProjects());
    installApkAction$ = ActionsObservable.of(installApk('path'));

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

        normalizeProjectListToObject(rawProjects) {
          if (!rawProjects.length) return {};

          const projects = rawProjects.map(p => p.val());

          return projects.reduce(
            (acc, current) => Object.assign(acc, { [current.name]: current }), {}
          );
        },
      },

      apkService: {
        triggerInstall(path) {
          return Promise.resolve(path);
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

  it('should dispatch install fulfilled action when apk trigger is done. ', () => {
    projects.triggerApkInstall(installApkAction$, store, dependencies)
      .toArray()
      .subscribe(actions => {
        expect(actions).toEqual([installApkFulfilled()]);
      });
  });

  it('should dispatch install errored action when apk trigger errors. ', () => {
    projects.triggerApkInstall(installApkAction$, store, dependencies)
      .toArray()
      .subscribe(null, e => {
        expect(e).toEqual([installApkErrored()]);
      });
  });


});
