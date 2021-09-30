// import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import storePersist from './storePersist';

import rootReducer from '@/Reducers';

const logger = createLogger();

export const themeKey = 'theme.portfolio.minlaxz';
export const toastKey = 'toast.portfolio.minlaxz';

// let middleware = [thunk];
// let configStore = applyMiddleware(...middleware);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// if (process.env.NODE_ENV === 'development') {
//     middleware = [...middleware, logger];
//     configStore = composeEnhancers(applyMiddleware(...middleware));
// }

/* Clear old data from storage for visted user  */
storePersist.isExist('minlaxz-theme') && storePersist.remove('minlaxz-theme');

if (storePersist.isExist(themeKey) && !storePersist.isExist(toastKey)) storePersist.clear();

const customMiddlewares = [thunk];
process.env.NODE_ENV === 'development' && customMiddlewares.push(logger);

const initalState = storePersist.isExist(themeKey) && storePersist.isExist(toastKey)
    ? { darkTheme: storePersist.get(themeKey), toast: storePersist.get(toastKey) }
    : {};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initalState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddlewares)
});

// (rootReducer, initalState, configStore);

store.subscribe(() => {
    const shouldSet = store.getState().darkTheme && store.getState().toast;
    if (!shouldSet) return;
    storePersist.set(themeKey, store.getState().darkTheme);
    storePersist.set(toastKey, store.getState().toast);
});

export default store;