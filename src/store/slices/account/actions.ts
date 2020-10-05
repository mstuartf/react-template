import {
  AccountCache,
  LoginRequestPayload,
  LoginSuccessResponse,
  SignUpRequestPayload,
  SignUpSuccessResponse,
} from "./types";
import { createStandardAction } from "typesafe-actions";
import { APIRequestConfig } from "../../types";

export const loadCache = createStandardAction("@account/loadCache")();

export const loadCacheSuccess = createStandardAction(
  "@account/loadCacheSuccess"
)<AccountCache>();

export const notAuthorised = createStandardAction("@account/notAuthorised")();

const loginRequestConfig: APIRequestConfig = {
  url: "/auth",
  method: "POST",
  authenticated: false,
  mock: {
    status: 200,
    body: {
      token: "__FAKE_TOKEN__",
    },
  },
};

export const loginRequest = createStandardAction("@account/login").map(
  (payload: LoginRequestPayload) => ({
    payload,
    meta: {
      request: loginRequestConfig,
    },
  })
);

const signUpRequestConfig: APIRequestConfig = {
  url: "/accounts",
  method: "POST",
  authenticated: false,
  mock: {
    status: 200,
    body: {
      token: "__FAKE_TOKEN__",
    },
  },
};

export const loginPending = createStandardAction("@account/loginPending")();
export const loginSuccess = createStandardAction("@account/loginSuccess")<
  LoginSuccessResponse
>();

export const signUpRequest = createStandardAction("@account/signUp").map(
  (payload: SignUpRequestPayload) => ({
    payload,
    meta: {
      request: signUpRequestConfig,
    },
  })
);

export const signUpPending = createStandardAction("@account/signUpPending")();
export const signUpSuccess = createStandardAction("@account/signUpSuccess")<
  SignUpSuccessResponse
>();

export const logoutRequest = createStandardAction("@account/logout")();
