import { all } from 'redux-saga/effects';
import AdminSaga from './admin'
import UserSaga from './user'

function* IndexSaga() {
  yield all([AdminSaga() , UserSaga()]);
}

export default IndexSaga;
