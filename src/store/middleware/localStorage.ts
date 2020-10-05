import { Middleware } from "redux";
import * as actions from "../slices/account/actions";
import { RootAction } from "../actions";
import { getType } from "typesafe-actions";
import { getCache } from "../../utilities/localStorage";

export const localStorageMiddleware: Middleware = (store) => (next) => (
  action: RootAction
) => {
  next(action);

  switch (action.type) {
    case getType(actions.loadCache):
      const cache = getCache();
      return next(actions.loadCacheSuccess(cache));

    // case AccountActionTypes.UNAUTHORIZED:
    // case AccountActionTypes.LOGOUT:
    //     deleteToken();
    //     return next(action);

    // case AccountActionTypes.LOGIN__SUCCESS:
    // case AccountActionTypes.SIGN_UP__SUCCESS:
    //     setToken(action.payload.token);
    //     return next(action);

    default:
      return;
  }
};
