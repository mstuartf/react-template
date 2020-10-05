export interface AccountState {
  isLoadingCache: boolean;
  cache: AccountCache | null;
  ui: {
    loginPending: boolean;
    signUpPending: boolean;
  };
}

export interface AccountCache {
  token: string | null;
}

export interface LoginRequestPayload {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  token: string;
}

export interface SignUpRequestPayload {
  name: string;
  email: string;
  password: string;
}

export interface SignUpSuccessResponse {
  token: string;
}
