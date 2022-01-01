export * from './admin.actions';
export * from './user.actions';

export const GET_PROFILE = 'GET_PROFILE';
export const CLEAR_STATE = 'CLEAR_STATE';

export const getProfile = (payload: string) => {
  return {
    type: GET_PROFILE,
    payload,
  };
};

export const clearAllState = () => {
  return {
    type: CLEAR_STATE,
  };
};
