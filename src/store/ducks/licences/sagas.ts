import { P5VersionAdminApi, LocalApi } from '../../../services/api';
import { put, call } from 'redux-saga/effects';
import { GetLicencesFailure, GetLicencesSuccess } from './actions';
import { ResponseGenerator } from '../user/sagas';

export function* getLicences() {
  try {
    const response: ResponseGenerator = yield call(
      P5VersionAdminApi.get,
      '/fireversion'
    );
    yield put(GetLicencesSuccess(response.data));
    console.log('\x1b[32mSUCESSO AO LISTAR LICENÇAS');
  } catch ({ message, response }) {
    const { status } = response;
    console.log('\x1b[31mERRO AO LISTAR LICENÇAS', message);
    yield put(GetLicencesFailure(status));
  }
}

export function* cancelLicences({ payload }: any) {
  try {
    const response: ResponseGenerator = yield call(
      LocalApi.put,
      '/bloqueiaSistema',
      {},
      {
        headers: {
          company_id: payload.company_id,
          store_id: payload.store_id,
          ead: null,
        },
      }
    );
    yield put(GetLicencesSuccess(response.data));
    console.log('\x1b[32mSUCESSO AO CANCELAR LICENÇA');
  } catch ({ message, response }) {
    const { status } = response;
    console.log('\x1b[31mERRO AO CANCELAR LICENÇA', message);
    yield put(GetLicencesFailure(status));
  }
}
