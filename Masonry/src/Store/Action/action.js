export const getInputChangeAction = (value) => {
    return {
        type: 'change_input_value',
        value
    }
}

export const initListAction = (data) => {
    return {
        type: 'init_list_action',
        data
    }
}

export const searchAction = (color) => {
    return {
        type: 'search_action',
        color
    }
}