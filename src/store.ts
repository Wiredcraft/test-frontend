import { getImage } from "./server/getImage";
import { makeAutoObservable, runInAction, toJS } from "mobx";

import { createContext, useContext } from "react";

export function createCtx<A extends Record<string, any> | null>() {
  const ctx = createContext<A | undefined>(undefined);

  function useStoreContext() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error("获取 context 必须包裹在Provider里 并提供value");
    return c;
  }
  return [useStoreContext, ctx.Provider] as const;
}

export class PageStore {
  constructor() {
    makeAutoObservable(this);
  }

  searchKey = "";

  changeSearchKey(val: typeof this.searchKey = "") {
    this.searchKey = val;
  }
}

export const [useStoreContext, Provider] = createCtx<PageStore>();
