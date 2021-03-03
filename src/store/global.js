import createContextStore from './hooks/createContextStore'
import http from '../utils/axios'
import { getUserLikes } from '../utils/data'

// intial Application state values
const initialState = {
  searchResults: [],
  modalType: '',
  modalOpen: false,
  zoomedImage: null,
  user: null,
  showLoader: false,
  loaderMessage: null,
  likes: []
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

    // Open and close modals for image zoom and user notifications
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

    // update user data in state
    const updateUser = (user) => {
      setState({
        user
      })
    }

    // attempt to register a new user in the DB and then update
    // state with returned user info
    const register = (email, password, confirmPassword) => {
      setShowLoader(true, 'Registering')
      try {
        http.post('/signup', {
          email, password, confirmPassword
        }).then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', res.data.user.id)
          setState({
            user: res.data.user
          })
          setShowLoader(false)
        })
      } catch (err) {
        console.error(err)
      }
    }
    
    // log user in and return their profile data
    const login = async (email, password) => {
      try {
        setShowLoader(true, 'Authenticating')
        const res = await http.post('/signin', { email, password })
        const { id } = res.data.user
        const likes = await getUserLikes(id, res.data.token)
        if (res.data) {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', res.data.user.id)
          setState({
            user: res.data.user,
            likes: likes.data
          })
        }
        setShowLoader(false)
      } catch (err) {
        openModal('auth-fail')
      }
    }

    // get a user by their user ID
    const getUser = async (id, token) => {
      if (!token) token = localStorage.getItem('token')
      try {
        const user = await http.get('/person', {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          params: {
            id
          }
        })
        const likes = await getUserLikes(user.data.id, token)
        setState({
          user: user.data,
          likes: likes.data
        })
      } catch (err) {
        console.error(err)
      }
    }

    // update a users profile info
    const updateProfile = (data, token) => {
      if (!token) token = localStorage.getItem('token')
      try {
        setShowLoader(true, 'Updating Profile')
        http.put('/person', data, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        }).then(res => {
          setState({
            user: res.data
          })
          setShowLoader(false)
        })
      } catch (err) {
        console.error(err)
      }
    }

    const logout = () => {
      localStorage.clear()
      setState({
        user: null
      })
    }

    const setShowLoader = (bool, message = null) => {
      setState({
        showLoader: bool,
        loaderMessage: message
      })
    }

    const refreshLikes = (id) => {
      const token = localStorage.getItem('token')
      getUserLikes(id, token).then(likes => {
        setState({
          likes: likes.data
        })
      })
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
      register,
      logout,
      getUser,
      updateProfile,
      showLoader: state.showLoader,
      loaderMessage: state.loaderMessage,
      setShowLoader,
      likes: state.likes
    }
  },
  initialState
)

// export values are the provider wrapper, any children who are wrapped in this provider can optionally
// subscribe to it and use these methods by calling useGlobalContext
export { GlobalProvider, useGlobalContext }
