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
