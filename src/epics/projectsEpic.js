import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import { FETCH_ALL_PROJECTS } from '../actions/actionTypes';
import { fetchAllProjectsErrored, fetchAllProjectsFulfilled } from '../actions/projectActions';

/**
 * Fetch all projects. Map to success/failure actions.
 *
 * @param {Object} action$
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
        projList => Observable
          .combineLatest(
            ...Object.keys(projList.val()).map(
              pid => Observable.fromPromise(firebaseService.fetchDetailsForProject(pid))
            )
          )
      )
      .map(data => fetchAllProjectsFulfilled(
        firebaseService.normalizeProjectListToObject(data.map(d => d.val())))
      )
      .catch(e => Observable.of(fetchAllProjectsErrored(e)))
    );
}

export {
  fetchAllProjectsEpic,
};
