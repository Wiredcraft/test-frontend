import { searchItems } from '../actions/actions';


const initialState = {
	searchItems: '',
	items: []
}

export default function testApp(state = initialState, action) {
	switch(action.type) {
		case 'SEARCH_ITEMS':
			return {
				...state,
				items: state.items.filter(item => item.region.toLowerCase().indexOf(action.context.toLowerCase()) >= 0)
			}
	default:
		return state
	}
}
