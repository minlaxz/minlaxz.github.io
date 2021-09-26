import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import storePersist from './storePersist';

import rootReducer from '@/Reducers';

const logger = createLogger();

export const storageKey = 'theme.portfolio.minlaxz';

let middleware = [thunk];
let configStore = applyMiddleware(...middleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, logger];
    configStore = composeEnhancers(applyMiddleware(...middleware));
}

/* Clear old data from storage for visted user  */
storePersist.isExist('minlaxz-theme') && storePersist.remove('minlaxz-theme');

const initalState = storePersist.isExist(storageKey)
    ? { theme: storePersist.get(storageKey) }
    : {};

const store = createStore(rootReducer, initalState, configStore);

store.subscribe(() => {
    const theme = store.getState().theme;
    if (!theme) return;
    storePersist.set(storageKey, store.getState().theme);
});

export default store;