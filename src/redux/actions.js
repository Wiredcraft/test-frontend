export const setFilter = (filter) => ({
  type: "SEARCH",
  payload: filter,
});

export const setLoadmore = (loadmore) => ({
  type: "LOAD_MORE",
  payload: loadmore,
});

export const setError = (errorMessage) => ({
  type: "SET_ERROR",
  payload: errorMessage,
});
