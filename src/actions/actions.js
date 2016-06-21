export function searchItems(context) {
	return {
		type: 'SEARCH_ITEMS',
		context
	}
}

export function showState(id) {
	return {
		type: 'SHOW_DISTRICT',
		id
	}
}

export function changeFilter(text) {
	return {
		type: 'CHANGE_FILTER',
		text
	}
}
