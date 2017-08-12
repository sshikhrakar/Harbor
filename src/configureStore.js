import logger from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import { createEpicMiddleware } from 'redux-observable';
import { compose, createStore, applyMiddleware } from 'redux';

import rootEpic from './epics';
import rootReducer from './reducers';
import { firebaseService }  from './services';

export const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    firebaseService,
  },
});

const middleware = [
  epicMiddleware,
  logger,
];

function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      autoRehydrate()
    )
  );
}

export default configureStore;
