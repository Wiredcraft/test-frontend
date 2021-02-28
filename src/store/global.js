import createContextStore from './hooks/createContextStore'
import json from '../utils/images.json'

// intialApplication state values
const initialState = {
  searchResults: json,
  modalType: '',
  modalOpen: false,
  zoomedImage: null
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

    const openModal = (modalType, zoomedImage = null) => {
      setState({
        modalOpen: true,
        modalType,
        zoomedImage
      })
      // document.getElementById('html').classList.add('noscroll')
      // document.getElementById('body').classList.add('noscroll')
    }

    const closeModal = () => {
      setState({
        modalOpen: false,
        modalType: '',
        zoomedImage: null
      })
      // document.getElementById('html').classList.remove('noscroll')
      // document.getElementById('body').classList.remove('noscroll')
    } 

    // return methods and values components can use
    return {
      fetchImages,
      searchResults: state.searchResults,
      modalType: state.modalType,
      modalOpen: state.modalOpen,
      zoomedImage: state.zoomedImage,
      openModal,
      closeModal
    }
  },
  initialState
)

// export values are the provider wrapper, any children who are wrapped in this provider can optionally
// subscribe to it and use these methods by calling useGlobalContext
export { GlobalProvider, useGlobalContext }
