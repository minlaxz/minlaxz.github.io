import { combineReducers } from 'redux';
import points from './points';
import user from './user';
import authUser from './authUser';

export default combineReducers({ pointss: points, user: user, authUser: authUser, theme: (state = 'light') => state });