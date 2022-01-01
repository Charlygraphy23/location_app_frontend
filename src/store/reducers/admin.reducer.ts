import {
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_REQUEST,
  ADMIN_UPDATE_CITY_FAILED,
  ADMIN_UPDATE_CITY_SUCCESS,
  ADMIN_UPDATE_CITY_REQUEST,

  ADMIN_GET_PROFILE_FAILED,
  ADMIN_GET_PROFILE_REQUEST,
  ADMIN_GET_PROFILE_SUCCESS,
  ADMIN_REMOVE_TOKEN,
  CLEAR_STATE
} from '../actions';
import { AdminStoreTypes, ReduxActionTypes } from 'interfaces';

let initialState: AdminStoreTypes = {
  loading: false,
  error: false,
  errorMessage: '',
  token: '',
  profile: {
    firstName: '',
    lastName: '',
    city: '',
  },
  pageLoading: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ReduxActionTypes) => {
  const { payload } = action;

  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_UPDATE_CITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_GET_PROFILE_REQUEST:
      return {
        ...state,
        pageLoading: true,
      };

    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case ADMIN_GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        pageLoading : false,
        profile: payload
      };
    case ADMIN_UPDATE_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          city: payload,
        },
      };

    case ADMIN_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
      };

    case ADMIN_UPDATE_CITY_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
      };
    case ADMIN_REMOVE_TOKEN:
      return {
        ...state,
        loading: false,
        error: false,
        token: '',
      };
    case ADMIN_GET_PROFILE_FAILED:
      return {
        ...state,
        pageLoading:  false,
        error: true,
        errorMessage: payload,
      };
    case CLEAR_STATE:
      return {
        loading: false,
        error: false,
        errorMessage: '',
        token: '',
        profile: {
          firstName: '',
          lastName: '',
          city: '',
        },
        pageLoading: false
      };

    default:
      return state;
  }
};
