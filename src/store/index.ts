import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { localStorageMiddleware } from "./middleware/localStorage";
import { accountReducer } from "./slices/account/reducer";
import { AccountState } from "./slices/account/types";
import { apiMiddleware } from "./middleware/api";

export interface AppState {
  account: AccountState;
}

export const configureStore = () => {
  return createStore(
    combineReducers({
      account: accountReducer,
    }),
    {} as any,
    composeWithDevTools(applyMiddleware(apiMiddleware, localStorageMiddleware))
  );
};
