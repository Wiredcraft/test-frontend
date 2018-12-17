import { INPUT_UPDATE } from '../actions'
const initState = '';

const inputReducer = (state = initState, action) => {
  switch(action.type) {
    case INPUT_UPDATE:
      console.log('onInputChange called')
      console.log(action)

      return action.payload
    default:
      return state
  }
}

export default inputReducer