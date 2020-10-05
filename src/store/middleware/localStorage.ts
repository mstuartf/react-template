import { Middleware } from "redux";
import * as actions from "../slices/account/actions";
import { RootAction } from "../actions";
import { getType } from "typesafe-actions";
import { getCache, setCache, deleteCache } from "../../utilities/localStorage";

export const localStorageMiddleware: Middleware = (store) => (next) => (
  action: RootAction
) => {
  next(action);

  switch (action.type) {
    case getType(actions.loadCache):
      const cache = getCache();
      return store.dispatch(actions.loadCacheSuccess(cache));

    case getType(actions.loginSuccess):
    case getType(actions.signUpSuccess):
      const { account } = store.getState();
      setCache(account.cache);
      return;

    case getType(actions.logoutRequest):
      deleteCache();
      return;

    default:
      return;
  }
};
