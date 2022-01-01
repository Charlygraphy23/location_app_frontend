export const ADMIN_LOGIN_REQUEST = 'ADMIN_LOGIN_REQUEST';
export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS';
export const ADMIN_LOGIN_FAILED = 'ADMIN_LOGIN_FAILED';

export const ADMIN_UPDATE_CITY_SUCCESS = 'ADMIN_UPDATE_CITY_SUCCESS';
export const ADMIN_UPDATE_CITY_FAILED = 'ADMIN_UPDATE_CITY_FAILED';
export const ADMIN_UPDATE_CITY_REQUEST = 'ADMIN_UPDATE_CITY_REQUEST';

export const ADMIN_GET_PROFILE_SUCCESS = 'ADMIN_GET_PROFILE_SUCCESS';
export const ADMIN_GET_PROFILE_FAILED = 'ADMIN_GET_PROFILE_FAILED';
export const ADMIN_GET_PROFILE_REQUEST = 'ADMIN_GET_PROFILE_REQUEST';

export const ADMIN_REMOVE_TOKEN = 'ADMIN_REMOVE_TOKEN';

export const CLEAR_STATE = 'CLEAR_STATE';

export const requestAdminLogin = (email: string, password: string) => {
  return {
    type: ADMIN_LOGIN_REQUEST,
    payload: { email, password },
  };
};

export const updateCity = (cityName: string, lat: number, lng: number) => {
  return {
    type: ADMIN_UPDATE_CITY_REQUEST,
    payload: { cityName, lat, lng },
  };
};

export const getAdminProfile = () => {
  return {
    type: ADMIN_GET_PROFILE_REQUEST,
  };
};

export const removeToken = () => {
  return {
    type: ADMIN_REMOVE_TOKEN,
  };
};
export const clearStateAdmin = () => {
  return {
    type: CLEAR_STATE,
  };
};
