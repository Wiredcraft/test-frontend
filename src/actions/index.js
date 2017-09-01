export const filterClick = (sortType,sortName) => ({
    type: 'SORT_BY_TYPE',
    sortType,
    sortName
})

export const searchValueChange = (searchValue) => ({
    type: 'SEARCH_VALUE',
    searchValue
})

export const filterMenuVisible = () => ({
    type: 'FILTER_MENU_VISIBLE',

})