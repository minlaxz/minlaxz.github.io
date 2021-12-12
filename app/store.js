import { configureStore } from '@reduxjs/toolkit'

// middlewares
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import storePersist from './storePersist'

import rootReducer from '@/app/features'

const minlaxzKey = 'minlaxz.vercel.app'
const customMiddlewares = [thunk]
const logger = createLogger()
process.env.NODE_ENV === 'development' && customMiddlewares.push(logger);

const initialState = storePersist.isExist(minlaxzKey)
    ? { counter: storePersist.get(minlaxzKey) }
    : {};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddlewares)
});

store.subscribe(() => {
    const shouldSet = store.getState().counter;
    if (!shouldSet) return;
    storePersist.set(minlaxzKey, store.getState().counter);
});

export default store;