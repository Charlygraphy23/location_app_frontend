import { combineReducers } from 'redux';
import AdminReducer from './admin.reducer';
import UserReducer from './user.reducer';
import CommonReducer from './common.reducer'

export default combineReducers({ AdminReducer, UserReducer , CommonReducer});
