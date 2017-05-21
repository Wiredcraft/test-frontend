export const EXPAND = 'EXPAND'
export const FILTER = 'FILTER'

export function _expand(to_expand_id) {
    return {
        type: EXPAND,
        to_expand_id
    }
}

export function _search(filter_type, filter_value) {
    return {
        type: FILTER,
        filter_type,
        filter_value
    }
}
