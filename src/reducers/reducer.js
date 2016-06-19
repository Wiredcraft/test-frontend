import { searchItems } from '../actions/actions';
import { tableData , triggerId} from '../config/data';

const initialState = {
	searchItems: '',
	items: tableData,
	inputValue: 'filter',
  triggerId: triggerId
}

export default function testApp(state = initialState, action) {
  console.log(action.type);
	switch(action.type) {
		case 'SEARCH_ITEMS':
			return {
				...state,
				items: tableData.filter(item => item.region.toLowerCase().indexOf(action.context.toLowerCase()) >= 0)
			}
    case 'SHOW_DISTRICT':
      console.log(action.id);
      return {
       ...state,
       triggerId: action.id
      }
	default:
		return state
	}
}
