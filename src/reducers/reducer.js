import { searchItems } from '../actions/actions';

const initialState = {
	searchItems: '',
	items: []
}

export default function testApp(state = initialState, action) {
	switch(action.type) {
		case 'SEARCH_ITEMS':
		  console.log('success')
			console.log(state);
			return Object.assign({},state, {
				items: state.items.map((item,index) => {
						if(item.region.indexOf(action.context) >= 0) {
							return Object.assign({}, item)
						}
				})
			})
	default:
		return state
	}
}
