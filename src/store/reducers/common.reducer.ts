import { ReduxActionTypes } from 'interfaces';
import { GET_PROFILE , CLEAR_STATE} from 'store/actions';
import { PROFILE } from 'utils/enums';

type PROFILE_TYPE = {
  profile: string;
};

let initialState: PROFILE_TYPE = {
  profile: PROFILE.user,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ReduxActionTypes) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case CLEAR_STATE:
      return {
        ...state,
        profile: PROFILE.user,
      };


      default : return state
  }
};
