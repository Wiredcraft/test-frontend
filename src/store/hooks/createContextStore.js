import React, { useContext } from 'react';
import useGenericState from './useGenericState';

// createContextStore takes the return value of a useGenericState and uses it as the store/reducer
// for a context provider. We can use createContextStore to make our contextProviders
// see global.js for an example
const createContextStore = (buildStateApi, initialState) => {
  const AppContext = React.createContext();

  const AppContextProvider = (props) => {
    const store = useGenericState(buildStateApi, initialState);
    return <AppContext.Provider value={store}>{props.children}</AppContext.Provider>;
  };

  const useAppContext = () => {
    return useContext(AppContext);
  };

  return [AppContextProvider, useAppContext];
};

export default createContextStore;
