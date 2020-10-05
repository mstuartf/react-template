import { AccountCache } from "./types";
import { createStandardAction } from "typesafe-actions";

export const loadCache = createStandardAction("@account/loadCache")();
export const loadCacheSuccess = createStandardAction(
  "@account/loadCacheSuccess"
)<AccountCache>();
