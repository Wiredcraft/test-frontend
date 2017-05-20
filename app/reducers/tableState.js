import {
    EXPAND
} from '../actions/index'

import tableData from './mockup'

const tableDataWithSubItems = (tableData) => {
    tableData.forEach(item => {
        item.subItems = tableData.filter(i => {
            return i.parentId === item.id
        })
        item.subItemLength = item.subItems.length
    })
    return tableData
}

const expandRow = (to_expand_id) => {
    tableData.map(item => {
        if (item.id === to_expand_id) {
            item.subItems.map(subItem => {
                subItem.display = !item.isExpanded
            });
            item.isExpanded = !item.isExpanded
        }
    })
    return tableData
}

export default function tableState(state = initialState, action) {
    switch (action.type) {
        case EXPAND:
            return {
                tableData: expandRow(action.to_expand_id)
            }
            break
        default:
            return state
    }
}

const initialState = {
    tableData: tableDataWithSubItems(tableData)
}
