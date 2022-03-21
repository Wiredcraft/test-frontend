const defaultState = {
    list: [],
    all:[]
}

export default (state = defaultState, action) => {
    if (action.type === 'init_list_action'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.all = action.data;
        newState.list = action.data;
        return newState;
    }
    if (action.type === 'search_action'){
        const newState = JSON.parse(JSON.stringify(state));
        const color = action.color;
        const arr = [...newState.all]
        if (color === ''){
            newState.list = arr;
            return newState
        }
        const filtered_arr = arr.filter(ele => ele.name === color);
        newState.list = filtered_arr
        return newState;
    }
   return state
}