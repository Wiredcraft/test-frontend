

const filter = ( state = {filterType : "", filterName :"",filterVisible:false} , action ) => {
    switch (action.type) {
        case 'SORT_BY_TYPE':
            return {...state, filterType:action.sortType,filterName :action.sortName}
        case 'FILTER_MENU_VISIBLE'   :
            return {...state, filterVisible: !state.filterVisible}
        default :
            return state;
    }
}

export default filter