import { all } from 'redux-saga/effects';
import userAuthSaga from './user.auth'
import userProfile from './user.profile'
import userStatusSaga from './user.status'


function* IndexAdminSaga() {
  yield all([userAuthSaga(), userProfile(), userStatusSaga()]);
}

export default IndexAdminSaga;
