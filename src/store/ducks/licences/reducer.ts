/* eslint-disable no-case-declarations */
import { Types, ILicenceTypes } from './types';

const INITIAL_STATE: ILicenceTypes = {
  data: [],
  loading: false,
  error: false,
};

const reducer = (state = INITIAL_STATE, action: any): any => {
  switch (action.type) {
    case Types.LICENCE:
      return { ...state, data: [], loading: true, error: false };
    case Types.LICENCE_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.LICENCE_SUCCESS:
      return {
        ...state,
        data: action.payload.licences,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
