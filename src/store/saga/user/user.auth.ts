import { call, put, takeLatest } from 'redux-saga/effects';
import { UserApi } from 'api';
import { AxiosResponse } from 'axios';
import { ReduxActionTypes } from 'interfaces';
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST
} from 'store/actions';


function* handleApi(action: ReduxActionTypes) {
  try {
    const { email, password  } = action.payload;
    const { data }: AxiosResponse = yield call(
        UserApi.signIn,
      email,
      password
    );

    localStorage.setItem('$user_' , data?.data?.token)
    yield put({ type: USER_LOGIN_SUCCESS, payload: data?.data?.token });
    
  } catch (err: any) {

    yield put({ type: USER_LOGIN_FAILED, payload: err?.response?.data?.msg });
  }
}



function* watchAdminLogin() {
  yield takeLatest(USER_LOGIN_REQUEST, handleApi);
}

export default watchAdminLogin;
