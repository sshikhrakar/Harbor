import logger from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import { createEpicMiddleware } from 'redux-observable';
import { compose, createStore, applyMiddleware } from 'redux';

import rootEpic from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

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
