import { call, put, takeLatest } from 'redux-saga/effects';
import { AdminApi } from 'api';
import { AxiosResponse } from 'axios';

import {
  ADMIN_GET_PROFILE_FAILED,
  ADMIN_GET_PROFILE_REQUEST,
  ADMIN_GET_PROFILE_SUCCESS,
} from 'store/actions';

function* handleApi() {
  try {
    const { data }: AxiosResponse = yield call(AdminApi.getAdminProfile);

    let payload = {
      firstName : data?.data?.firstName,
      lastName : data?.data?.lastName,
      city : data?.data?.city,
    };

    yield put({ type: ADMIN_GET_PROFILE_SUCCESS, payload: payload });
  } catch (err: any) {
    yield put({
      type: ADMIN_GET_PROFILE_FAILED,
      payload: err?.response?.data?.msg,
    });
  }
}

function* watchAdminLogin() {
  yield takeLatest(ADMIN_GET_PROFILE_REQUEST, handleApi);
}

export default watchAdminLogin;
