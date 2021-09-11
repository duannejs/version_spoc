/* eslint-disable no-case-declarations */
import { Types, IUserTypes } from './types';

const INITIAL_STATE: IUserTypes = {
  user: null,
  loading: false,
  error: false,
};

const reducer = (state = INITIAL_STATE, action: any): any => {
  switch (action.type) {
    case Types.SESSION:
      return { user: {}, loading: true, error: false };
    case Types.SESSION_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.SESSION_SUCCESS:
      return {
        user: action.payload.user,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
