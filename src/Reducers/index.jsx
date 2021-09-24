import { combineReducers } from 'redux';
import points from './points';
import user from './user';
import authUser from './authUser';
import theme from './theme';

export default combineReducers({ pointss: points, user: user, authUser: authUser, theme });