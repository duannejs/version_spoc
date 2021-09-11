import { IUser, Types } from './types';
import { action } from 'typesafe-actions';

export const SessionUser = (email: string, password: string) => {
  return action(Types.SESSION, { email, password });
};

export const SessionUserFailure = (err: number) => {
  return action(Types.SESSION_FAILURE, { err });
};

export const SessionUserSuccess = (user: IUser) => {
  return action(Types.SESSION_SUCCESS, { user });
};
