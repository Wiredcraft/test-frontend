import { VisibilityFilters,SET_VISIBILITY_FILTER,TOGGLE_ITEM } from '../actions/actions';

const initialState = {
	visibilityFilters: VisibilityFilters.SHOW_ALL,
	items: []
}

// aim to the whole app
export default function testApp(state = initialState, action) {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return Object.assign({},state, {
				visibilityFilters: action.filter
			})
		// toggle and show district and township
		case TOGGLE_ITEM:
		 return Object.assign({},state, {

		 })
	default:
		return state
	}
}
