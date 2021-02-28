import createContextStore from './hooks/createContextStore'
import http from '../utils/axios'

// intialApplication state values
const initialState = {
  searchResults: [],
  modalType: '',
  modalOpen: false,
  zoomedImage: null,
  user: null
}

// We pass the name of our provider, and the subscriber function
const [GlobalProvider, useGlobalContext] = createContextStore(
  ({ state, setState }) => {
    // we add any methods here to update state

    const updateImages = (searchResults) => {
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
    }

    const closeModal = () => {
      setState({
        modalOpen: false,
        modalType: '',
        zoomedImage: null
      })
    } 

    const updateUser = (user) => {
      setState({
        user
      })
    }

    const register = (email, password, confirmPassword) => {
      try {
        http.post('/signup', {
          email, password, confirmPassword
        }).then(res => {
          localStorage.setItem('token', res.data.token)
          setState({
            user: res.data.user
          })
        })
      } catch (err) {
        console.log(err)
      }
    }
    
    const login = (email, password) => {
      try {
        return http.post('/signin', { email, password }).then(res => {
          localStorage.setItem('token', res.data.token)
          setState({
            user: res.data.user
          })
        })
      } catch (err) {
        console.log(err)
        openModal('auth-fail')
      }
    }
    // return methods and values components can use
    return {
      updateImages,
      searchResults: state.searchResults,
      modalType: state.modalType,
      modalOpen: state.modalOpen,
      zoomedImage: state.zoomedImage,
      openModal,
      closeModal,
      user: state.user,
      updateUser,
      login,
      register
    }
  },
  initialState
)

// export values are the provider wrapper, any children who are wrapped in this provider can optionally
// subscribe to it and use these methods by calling useGlobalContext
export { GlobalProvider, useGlobalContext }
