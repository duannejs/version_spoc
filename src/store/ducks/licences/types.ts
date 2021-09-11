import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ModalAction = ActionType<typeof actions>;

export const Types = {
  LICENCE: '@licence/LICENCE',
  LICENCE_FAILURE: '@licence/LICENCE_FAILURE',
  LICENCE_SUCCESS: '@licence/LICENCE_SUCCESS',
  CANCEL_LICENCE: '@licence/CANCEL_LICENCE',
};

export interface ILicence {
  company_id: number;
  numero: number;
  cnpj: string;
  nome: string;
  versaoAdm: any;
  versaoPdv: any;
  expira: any;
}

export interface ILicenceTypes {
  data: ILicence[];
  loading: boolean;
  error: boolean;
}
