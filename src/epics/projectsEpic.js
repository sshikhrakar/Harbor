import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import {
  DOWNLOAD_STARTED, // eslint-disable-line
  FETCH_ALL_PROJECTS,
} from '../actions/actionTypes';
import {
  fetchAllProjectsErrored,
  fetchAllProjectsFulfilled,
} from '../actions/projectActions';

/**
 * Fetch all projects. Map to success/failure actions.
 *
 * @param {Observable} action$
 * @param {Object} store
 * @param {Object} firebaseService
 * @returns {Observable}
 */
function fetchAllProjectsEpic(action$, store, { firebaseService }) { // eslint-disable-line
  return action$
    .ofType(FETCH_ALL_PROJECTS)
    .debounceTime(1000)
    .switchMap(() => Observable
      .fromPromise(firebaseService.fetchProjectListForUser())
      .flatMap(
        projList => {
          if (!projList.val()) return Observable.of([]);

          return Observable
            .combineLatest(
              ...Object.keys(projList.val()).map(
                pid => Observable.fromPromise(firebaseService.fetchDetailsForProject(pid))
              )
            );
        })
      .map(data => firebaseService.normalizeProjectListToObject(data))
      .map(data => fetchAllProjectsFulfilled(data))
      .catch(e => Observable.of(fetchAllProjectsErrored(e)))
    );
}

/**
 * Download an apk for a service.
 *
 * @param {Observable} action$
 * @param {Object} store
 * @param {Object} downloadService
 * @returns {Observable}
 */
function downloadApkForProjectEpic(action$, store, { downloadService })  { // eslint-disable-line
  return action$;
}

export {
  fetchAllProjectsEpic,
};
