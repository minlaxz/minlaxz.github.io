import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'


const initalState = {

}

let store;
// if (import.meta.env.MODE === "development") {
//     store = createStore(reducers, initalState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// } else {
//     store = createStore(reducers, initalState, compose(applyMiddleware(thunk)));
// }
// store = createStore(reducers, initalState, compose(applyMiddleware(thunk)));
store = createStore(reducers, initalState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;