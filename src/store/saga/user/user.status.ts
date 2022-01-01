import { call, put, takeLatest } from 'redux-saga/effects';
import { UserApi } from 'api';
import { AxiosResponse } from 'axios';

import {
  USER_CHECK_STATUS_FAILED,
  USER_CHECK_STATUS_REQUEST,
  USER_CHECK_STATUS_SUCCESS
} from 'store/actions';
import { ReduxActionTypes } from 'interfaces';
import { toast } from 'react-toastify';

function* handleApi(action : ReduxActionTypes) {
    
  try {

    const {lat , lng} = action.payload

    yield call(UserApi.getAddressInfo ,{lat, lng});

    yield put({ type: USER_CHECK_STATUS_SUCCESS});
    toast.success('Found under 100km')
  } catch (err: any) {
      toast.error(err?.response?.data?.msg ?? err.message)
    yield put({
      type: USER_CHECK_STATUS_FAILED,
      payload: err?.response?.data?.msg,
    });
  }
}

function* watchAdminLogin() {
  yield takeLatest(USER_CHECK_STATUS_REQUEST, handleApi);
}

export default watchAdminLogin;
