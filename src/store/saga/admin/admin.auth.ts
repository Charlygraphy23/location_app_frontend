import { call, put, takeLatest } from 'redux-saga/effects';
import { AdminApi } from 'api';
import { AxiosResponse } from 'axios';
import { ReduxActionTypes } from 'interfaces';
import {
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_REQUEST,
} from 'store/actions';
import { forwardTo } from 'store/route';

function* handleApi(action: ReduxActionTypes) {
  try {
    const { email, password  } = action.payload;
    const { data }: AxiosResponse = yield call(
      AdminApi.signIn,
      email,
      password
    );

    localStorage.setItem('$admin_' , data?.data?.token)
    yield put({ type: ADMIN_LOGIN_SUCCESS, payload: data?.data?.token });
    
  } catch (err: any) {

    yield put({ type: ADMIN_LOGIN_FAILED, payload: err?.response?.data?.msg });
  }
}



function* watchAdminLogin() {
  yield takeLatest(ADMIN_LOGIN_REQUEST, handleApi);
}

export default watchAdminLogin;
