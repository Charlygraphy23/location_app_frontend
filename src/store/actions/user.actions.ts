export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const USER_GET_PROFILE_SUCCESS = 'USER_GET_PROFILE_SUCCESS';
export const USER_GET_PROFILE_FAILED = 'USER_GET_PROFILE_FAILED';
export const USER_GET_PROFILE_REQUEST = 'USER_GET_PROFILE_REQUEST';

export const USER_CHECK_STATUS_SUCCESS = 'USER_CHECK_STATUS_SUCCESS';
export const USER_CHECK_STATUS_FAILED = 'USER_CHECK_STATUS_FAILED';
export const USER_CHECK_STATUS_REQUEST = 'USER_CHECK_STATUS_REQUEST';

export const USER_REMOVE_TOKEN = 'USER_REMOVE_TOKEN';

export const CLEAR_STATE_USER = 'CLEAR_STATE_USER';

export const requestUserLogin = (email: string, password: string) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload: { email, password },
  };
};

export const removeUserToken = () => {
  return {
    type: USER_REMOVE_TOKEN,
  };
};

export const getUserProfile = () => {
  return {
    type: USER_GET_PROFILE_REQUEST,
  };
};

export const getAddressStatus = (lat: number, lng: number) => {
  return {
    type: USER_CHECK_STATUS_REQUEST,
    payload: { lat, lng },
  };
};

export const clearStateUser = () => {
  return {
    type: CLEAR_STATE_USER,
  };
};
