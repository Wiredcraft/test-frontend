import React, { useContext } from 'react'
import useGenericState from './useGenericState'

const createContextStore = (buildStateApi, initialState) => {
  const AppContext = React.createContext()

  const AppContextProvider = (props) => {
    const store = useGenericState(buildStateApi, initialState)
    return (
      <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
    )
  }

  const useAppContext = () => {
    return useContext(AppContext)
  }

  return [AppContextProvider, useAppContext]
}

export default createContextStore
