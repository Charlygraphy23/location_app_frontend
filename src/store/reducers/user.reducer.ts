import { ReduxActionTypes } from 'interfaces';
import { UserStoreTypes } from 'interfaces/user.interfaces';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_REMOVE_TOKEN,
  USER_GET_PROFILE_FAILED,
  USER_GET_PROFILE_REQUEST,
  USER_GET_PROFILE_SUCCESS,
  USER_CHECK_STATUS_FAILED,
  USER_CHECK_STATUS_REQUEST,
  USER_CHECK_STATUS_SUCCESS,
  CLEAR_STATE_USER,
} from 'store/actions';

let initialState: UserStoreTypes = {
  loading: false,
  error: false,
  errorMessage: '',
  token: '',
  profile: {
    firstName: '',
    lastName: '',
  },
  pageLoading: false,
  addressFound: -1, // -1 == null , 0 : false , 1 == true
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ReduxActionTypes) => {
  const { payload } = action;

  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_GET_PROFILE_REQUEST:
      return {
        ...state,
        pageLoading: true,
      };

    case USER_CHECK_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };

    case USER_GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        pageLoading: false,
        profile: payload,
      };
    case USER_CHECK_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        addressFound: 1,
      };

    case USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
      };

    case USER_GET_PROFILE_FAILED:
      return {
        ...state,
        pageLoading: false,
        error: true,
        errorMessage: payload,
      };
    case USER_CHECK_STATUS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
        addressFound: 0,
      };

    case USER_REMOVE_TOKEN:
      return {
        ...state,
        loading: false,
        error: false,
        token: '',
      };
    case CLEAR_STATE_USER:
      return {
        loading: false,
        error: false,
        errorMessage: '',
        token: '',
        profile: {
          firstName: '',
          lastName: '',
        },
        pageLoading: false,
        addressFound: -1,
      };

    default:
      return state;
  }
};
