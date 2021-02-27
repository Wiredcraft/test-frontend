import createContextStore from './hooks/createContextStore'
import json from '../utils/images.json'

const initialState = {
  searchResults: []
}

const [GlobalProvider, useGlobalContext] = createContextStore(
  ({ state, setState }) => {

    const fetchImages = (query) => {
      // const parsed = Array.from(json)
      const searchResults = json.filter(item => item.name.indexOf(query) > -1)
      console.log(searchResults)
      setState({
        searchResults
      })
    }

    return {
      fetchImages,
      searchResults: state.searchResults
    }
  },
  initialState
)

export { GlobalProvider, useGlobalContext }
