import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import storePersist from './storePersist';

import rootReducer from '@/Reducers';

const logger = createLogger();

let middleware = [thunk];
let configStore = applyMiddleware(...middleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, logger];
    configStore = composeEnhancers(applyMiddleware(...middleware));
}

const initalState = storePersist.get('minlaxz-theme')
    ? { theme: storePersist.get('minlaxz-theme') }
    : {};



const store = createStore(rootReducer, initalState, configStore);
export default store;