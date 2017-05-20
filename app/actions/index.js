export const EXPAND = 'EXPAND'

export function _expand(to_expand_id) {
    return {
        type: EXPAND,
        to_expand_id
    }
}
