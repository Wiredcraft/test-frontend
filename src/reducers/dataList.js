import * from '../constants/ActionType';

// q: 初始状态是什么
const initialState = {
	
}

export default function date(state = initialState, action) {
	switch(action.type) {
		case SET_FILTER:
			return Object.assign({},state, {

			})
	}
	default:
		return state
}
