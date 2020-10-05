import { createSelector } from "reselect";
import { AppState } from "../../index";
import { AccountState } from "./types";
import { Selector } from "react-redux";

export const selectAccountState = (state: AppState): AccountState =>
  state.account;

export const selectIsLoggedIn: Selector<AppState, boolean> = createSelector(
  selectAccountState,
  (account) => !!(account.cache && account.cache.token)
);

export const selectIsLoadingCache: Selector<AppState, boolean> = createSelector(
  selectAccountState,
  (account) => account.isLoadingCache
);

export const selectLoginPending: Selector<AppState, boolean> = createSelector(
  selectAccountState,
  (account) => account.ui.loginPending
);

export const selectSignUpPending: Selector<AppState, boolean> = createSelector(
  selectAccountState,
  (account) => account.ui.signUpPending
);
