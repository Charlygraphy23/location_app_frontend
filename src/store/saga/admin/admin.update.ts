import { call, put, takeLatest } from 'redux-saga/effects';
import { AdminApi } from 'api';
import { ReduxActionTypes } from 'interfaces';
import {
  ADMIN_UPDATE_CITY_FAILED,
  ADMIN_UPDATE_CITY_SUCCESS,
  ADMIN_UPDATE_CITY_REQUEST,
} from 'store/actions';
import { toast } from 'react-toastify';


function* handleApi(action: ReduxActionTypes) {
  try {
    const { cityName, lat, lng } = action.payload;
    yield call(AdminApi.updateCity, cityName, lat, lng);
    toast.success("Address updated success")
    yield put({ type: ADMIN_UPDATE_CITY_SUCCESS, payload: cityName });
  } catch (err: any) {
    yield put({
      type: ADMIN_UPDATE_CITY_FAILED,
      payload: err?.response?.data?.msg,
    });
  }
}

function* watchAdminLogin() {
  yield takeLatest(ADMIN_UPDATE_CITY_REQUEST, handleApi);
}

export default watchAdminLogin;
