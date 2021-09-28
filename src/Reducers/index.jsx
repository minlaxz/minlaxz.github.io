import { combineReducers } from 'redux';
import points from './points';
import user from './user';
import authUser from './authUser';

import counterReducer from './counterSlice';
import commitReducer from './lastCommitSlice';
import darkThemeReducer from './themeSlice';

export default combineReducers({
    lastCommit: commitReducer,
    counter: counterReducer,
    pointss: points,
    user: user,
    authUser: authUser,
    darkTheme: darkThemeReducer
});