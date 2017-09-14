import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {
  DOWNLOAD_STARTED,
  FETCH_ALL_PROJECTS,
  INSTALL_APK,
} from '../actions/actionTypes';
import {
  fetchAllProjectsErrored,
  fetchAllProjectsFulfilled,
} from '../actions/projectActions';
import {
  completeDownload,
  downloadErrored,
  updateCurrentDownloadProgress,
} from '../actions/downloadActions';
import {
  installApkFulfilled,
  installApkErrored,
} from '../actions/apkActions';

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
function startDownloadEpic(action$, store, { downloadService }) {
  return action$
    .distinctUntilChanged()
    .ofType(DOWNLOAD_STARTED)
    .debounceTime(1000)
    .switchMap(({ payload }) => {
      const { name, uploads } = payload.project;
      const filepath = downloadService.getTargetPath(name, payload.timestamp);

      const downloadJob = downloadService.downloadApk({
        filepath,
        projectName: name,
        releaseTimestamp: payload.timestamp,
        url: uploads[payload.timestamp].download_url,
        onBegin: () => store.dispatch(updateCurrentDownloadProgress(0)),
        onProgress: ({ bytesWritten, contentLength }) => store.dispatch(updateCurrentDownloadProgress(bytesWritten / contentLength)),
      });

      return Observable
        .fromPromise(downloadJob.promise)
        .mapTo(completeDownload(payload.project, payload.timestamp, filepath))
        .catch(err => Observable.of(downloadErrored(err, payload.project)));
    });
}

/**
 * Trigger the install of an APK.
 *
 * @param {Observable} action$
 * @param {Object} store
 * @param {Object} apkService
 * @returns {Observable}
 */
function triggerApkInstall(action$, store, { apkService }) { // eslint-disable-line
  return action$
    .ofType(INSTALL_APK)
    .switchMap(({ payload }) => {
      return Observable.fromPromise(apkService.triggerInstall(payload.apkPath));
    })
    .mapTo(installApkFulfilled())
    .catch(() => Observable.of(installApkErrored()));
}

export {
  startDownloadEpic,
  fetchAllProjectsEpic,
  triggerApkInstall,
};
