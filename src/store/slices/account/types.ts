export interface AccountState {
  isLoadingCache: boolean;
  cache: AccountCache | null;
}

export interface AccountCache {
  token: string | null;
}
