import { AdminStoreTypes } from './admin.interfaces';
import {UserStoreTypes} from "./user.interfaces"

export * from './admin.interfaces';

export type ReduxActionTypes = {
  type: string;
  payload?: any;
};

type CommonTypes = {
  profile : string;
}

export type ReducerType = {
  AdminReducer: AdminStoreTypes;
  UserReducer: UserStoreTypes;
  CommonReducer: CommonTypes;
};
