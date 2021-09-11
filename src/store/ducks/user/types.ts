import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ModalAction = ActionType<typeof actions>;

export const Types = {
  SESSION: '@user/SESSION',
  SESSION_FAILURE: '@user/SESSION_FAILURE',
  SESSION_SUCCESS: '@user/SESSION_SUCCESS',
};

export interface IUser {
  companies: ICompany[];
  id: number;
  name: string;
  email: string;
  token: string;
}

export interface IUserTypes {
  user: IUser | null;
  loading: boolean;
  error: boolean;
}

export interface ICompany {
  company_id: number;
  company_name: string;
  store: ICompanyStore[];
}

export interface ICompanyStore {
  company_id: number;
  numero: number;
  nome: string;
  permissions: number[] | null;
  ip: string;
}
