import { AccountCache } from "../store/slices/account/types";

const localStorageKey = process.env.REACT_APP_LOCAL_STORAGE_KEY as string;

export const getCache: () => AccountCache = () => {
  const raw = localStorage.getItem(localStorageKey) || "{}";
  return JSON.parse(raw);
};

export const setCache = (cache: AccountCache) => {
  localStorage.setItem(localStorageKey, JSON.stringify(cache));
};

export const deleteCache = () => {
  localStorage.removeItem(localStorageKey);
};
