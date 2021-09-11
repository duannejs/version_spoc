import { IUserTypes } from './ducks/user/types';
import { ILicenceTypes } from './ducks/licences/types';

export interface AppStore {
  user: IUserTypes;
  licences: ILicenceTypes;
}
