import { AccountState } from "./types";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";

export type AccountAction = ActionType<typeof actions>;

const initialState: AccountState = {
  isLoadingCache: true,
  cache: null,
  ui: {
    loginPending: false,
    signUpPending: false,
  },
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
  }))
  .handleAction(actions.loginPending, (state) => ({
    ...state,
    ui: {
      ...state.ui,
      loginPending: true,
    },
  }))
  .handleAction(actions.signUpPending, (state) => ({
    ...state,
    ui: {
      ...state.ui,
      signUpPending: true,
    },
  }))
  .handleAction(actions.loginSuccess, (state, { payload: { token } }) => ({
    ...state,
    cache: {
      ...(state.cache || {}),
      token,
    },
    ui: {
      ...state.ui,
      loginPending: false,
    },
  }))
  .handleAction(actions.signUpSuccess, (state, { payload: { token } }) => ({
    ...state,
    cache: {
      ...(state.cache || {}),
      token,
    },
    ui: {
      ...state.ui,
      signUpPending: false,
    },
  }))
  .handleAction(actions.logoutRequest, (state) => ({
    ...state,
    cache: null,
  }));

export { reducer as accountReducer };
