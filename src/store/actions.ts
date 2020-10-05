// see: https://github.com/piotrwitek/typesafe-actions#reducers

import { AccountAction } from "./slices/account/reducer";

export type RootAction = AccountAction;

declare module "typesafe-actions" {
  interface Types {
    RootAction: RootAction;
  }
}
