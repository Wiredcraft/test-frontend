import * as types from '../constants/ActionType';

export function searchData(text) {
	return {
		type: types.SEARCH_DATA,
		text
	}
}