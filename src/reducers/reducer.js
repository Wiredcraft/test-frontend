import { searchItems } from '../actions/actions';
import { tableData , triggerId} from '../config/data';



const initialState = {
	searchItems: '',
	items: tableData,
	inputValue: 'filter',
  triggerId: triggerId,
	filter: "region"
}

export default function testApp(state = initialState, action) {
  console.log(action.type);
	switch(action.type) {
		case 'SEARCH_ITEMS':
			let filterText = state.filter;
			return {
				...state,
				items: tableData.filter(item => item[filterText].toLowerCase().indexOf(action.context.toLowerCase()) >= 0)
			}
    case 'SHOW_DISTRICT':
      console.log(action.id);
      return {
       ...state,
       triggerId: action.id
      }
		case 'CHANGE_FILTER':
			return {
				...state,
				filter: action.text
			}
	default:
		return state
	}
}
