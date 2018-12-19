// import { SEARCH_UPDATE } from '../actions'
import {data} from '../../data/data';
import { SEARCH_UPDATE } from '../actions'
const initState = data;

const dataReducer = (state = initState, action) => {
  switch(action.type) {
    case SEARCH_UPDATE:
      return initState.filter(i => {
        switch(action.payload.filterType) { 
          case 'Last input':
            return i.input.includes(action.payload.filterText)
          case 'Number of forms':
            return i.forms.includes(action.payload.filterText)
          case 'Number of voters':
            return i.voters.includes(action.payload.filterText)
          case 'Updates':
            return i.updates.includes(action.payload.filterText)
          default:
            return i.name.toUpperCase().includes(action.payload.filterText.toUpperCase())
        }
      })
    default:
      return state
  }
}

export default dataReducer