import { MutationCache, QueryCache, QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        console.error(`后台更新数据失败：${(error as Error).message ?? ""}`);
      } else {
        console.error(
          `请求出错啦, 请重试 ⚆ _ ⚆… ${(error as Error).message ?? ""}`
        );
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, variables, context) => {
      console.error(
        `请求出错啦, 请重试 ⚆ _ ⚆… ${(error as Error).message ?? ""}`
      );
    },
  }),
});
