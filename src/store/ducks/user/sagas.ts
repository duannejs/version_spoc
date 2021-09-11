import { P5VersionAdminApi } from '../../../services/api';
import { put, call } from 'redux-saga/effects';
import { SessionUserFailure, SessionUserSuccess } from './actions';

export function* LoginUser({ payload }: any) {
  try {
    const response: ResponseGenerator = yield call(
      P5VersionAdminApi.post,
      'session',
      {
        email: payload.email,
        password: payload.password,
      }
    );
    yield put(SessionUserSuccess(response.data));
    console.log('\x1b[32mSUCESSO NO LOGIN');
  } catch ({ message, response }) {
    console.log('\x1b[31mERRO NO LOGIN', message);
    yield put(SessionUserFailure(response?.status));
  }
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
