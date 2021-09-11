import { all, takeLatest } from 'redux-saga/effects';
import { Types as UserTypes } from './user/types';
import { LoginUser } from './user/sagas';
import { Types as LicencesTypes } from './licences/types';
import { getLicences, cancelLicences } from './licences/sagas';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.SESSION, LoginUser)]);
  yield all([takeLatest(LicencesTypes.LICENCE, getLicences)]);
  yield all([takeLatest(LicencesTypes.CANCEL_LICENCE, cancelLicences)]);
}
