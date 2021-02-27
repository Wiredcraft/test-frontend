import React from 'react'

const useGenericState = (
  buildStateApi = ({ state, setState }) => ({ state, setState }),
  initialState = {}
) => {
  const [state, setState] = React.useReducer(
    (prevState, stateSlice) => ({ ...prevState, ...stateSlice }),
    initialState
  )
  // return React.useMemo(() => buildStateApi({ state, setState }), [
  //   state,
  //   setState,
  //   buildStateApi,
  // ])
  return buildStateApi({ state, setState })
}

export default useGenericState
