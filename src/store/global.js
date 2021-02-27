import createContextStore from './hooks/createContextStore'
import json from '../utils/images.json'

// intialApplication state values
const initialState = {
  searchResults: []
}

// We pass the name of our provider, and the subscriber function
const [GlobalProvider, useGlobalContext] = createContextStore(
  ({ state, setState }) => {
    // we add any methods here to update state

    const fetchImages = (query) => {
      const searchResults = json.filter(item => item.name.indexOf(query) > -1)
      setState({
        searchResults
      })
    }

    // return methods and values components can use
    return {
      fetchImages,
      searchResults: state.searchResults
    }
  },
  initialState
)

// export values are the provider wrapper, any children who are wrapped in this provider can optionally
// subscribe to it and use these methods by calling useGlobalContext
export { GlobalProvider, useGlobalContext }
