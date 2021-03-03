import React from 'react';

// useGenericState takes a function that takes a setState function and an initial state
// it returns a state reducer. it is passed into createContextStore as the context store
const useGenericState = (
  buildStateApi = ({ state, setState }) => ({ state, setState }),
  initialState = {}
) => {
  const [state, setState] = React.useReducer(
    (prevState, stateSlice) => ({ ...prevState, ...stateSlice }),
    initialState
  );

  return buildStateApi({ state, setState });
};

export default useGenericState;
