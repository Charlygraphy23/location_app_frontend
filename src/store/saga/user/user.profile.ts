import { call, put, takeLatest } from 'redux-saga/effects';
import { UserApi } from 'api';
import { AxiosResponse } from 'axios';

import {
  USER_GET_PROFILE_FAILED,
  USER_GET_PROFILE_SUCCESS,
  USER_GET_PROFILE_REQUEST,
} from 'store/actions';

function* handleApi() {
  try {
    const { data }: AxiosResponse = yield call(UserApi.getAdminProfile);

    let payload = {
      firstName: data?.data?.firstName,
      lastName: data?.data?.lastName,
    };

    yield put({ type: USER_GET_PROFILE_SUCCESS, payload: payload });
  } catch (err: any) {
    yield put({
      type: USER_GET_PROFILE_FAILED,
      payload: err?.response?.data?.msg,
    });
  }
}

function* watchAdminLogin() {
  yield takeLatest(USER_GET_PROFILE_REQUEST, handleApi);
}

export default watchAdminLogin;
