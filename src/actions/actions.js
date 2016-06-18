// action 类型
// 1. 搜索过滤
// 2. 点击item 显示District  和 township
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_FILTER: 'SHOW_SEARCH'
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

export function toggleItem(item) {
	return {
		type: TOGGLE_ITEM,
		item
	}
}
