import { all } from 'redux-saga/effects';
import watchAdminLogin from './admin.auth';
import adminUpdateCitySaga  from './admin.update'
import adminGetProfile from './admin.profile'

function* IndexAdminSaga() {
  yield all([watchAdminLogin() , adminUpdateCitySaga() , adminGetProfile()]);
}

export default IndexAdminSaga;
