// import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import storePersist from './storePersist';

import rootReducer from '@/Reducers';

const logger = createLogger();

export const storageKey = 'theme.portfolio.minlaxz';

// let middleware = [thunk];
// let configStore = applyMiddleware(...middleware);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// if (process.env.NODE_ENV === 'development') {
//     middleware = [...middleware, logger];
//     configStore = composeEnhancers(applyMiddleware(...middleware));
// }

/* Clear old data from storage for visted user  */
storePersist.isExist('minlaxz-theme') && storePersist.remove('minlaxz-theme');

const customMiddlewares = [thunk];
process.env.NODE_ENV === 'development' && customMiddlewares.push(logger);

const initalState = storePersist.isExist(storageKey)
    ? { darkTheme: storePersist.get(storageKey) }
    : {};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initalState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddlewares)
});

// (rootReducer, initalState, configStore);

store.subscribe(() => {
    const theme = store.getState().darkTheme;
    if (!theme) return;
    storePersist.set(storageKey, store.getState().darkTheme);
});

export default store;