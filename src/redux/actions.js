export const setError = (errorMessage) => ({
  type: 'SET_ERROR',
  payload: errorMessage,
});

export const onSearch = (filter) => ({
  type: 'SEARCH',
  payload: filter,
});
