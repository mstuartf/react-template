import { AccountState } from "./types";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";

export type AccountAction = ActionType<typeof actions>;

const initialState: AccountState = {
  isLoadingCache: true,
  cache: null,
};

const reducer = createReducer(initialState)
  .handleAction(actions.loadCache, (state, action) => ({
    ...state,
    isLoadingCache: true,
  }))
  .handleAction(actions.loadCacheSuccess, (state, { payload }) => ({
    ...state,
    isLoadingCache: false,
    cache: {
      ...payload,
    },
  }));

export { reducer as accountReducer };
