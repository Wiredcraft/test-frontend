import { EXPAND, FILTER } from '../actions/index'
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

const initialState = {
    tableData: tableDataWithSubItems(tableData)
}

const expandRow = (to_expand_id) => {
    tableData.map(item => {
        if (item.id === to_expand_id) {
            item.subItems.map(subItem => {
                subItem.display = !item.isExpanded
            })
            item.isExpanded = !item.isExpanded
        }
    })
    return tableData
}

const initiateTable = (show = false) => {
    tableData.map(item => {
        item.display = show
        item.isExpanded = show
    })
}

const showParent = (node) => {
    if (node.parentId === 0) {
        return
    }
    const parentNode = tableData.filter(item => {
        return item.id === node.parentId
    })[0]
    parentNode.isExpanded = true
    parentNode.display = true
    showParent(parentNode)
}

const filterColumn = {
    'Region': 'regionName',
    'Last Input': 'lastInput',
    'Number of forms': 'numberOfForms',
    'Number of Voters': 'numberOfVoters',
    'Update': 'update'
}

const filterTable = (action) => {
    initiateTable()
    if (action.filter_type !== 'Filter' && action.filter_value !== '') {
        tableData.map(item => {
            const filterCol = filterColumn[action.filter_type]
            if (item[filterCol].indexOf(action.filter_value) > -1) {
                item.display = true
                if (item.divisionLevel > 0) {
                    showParent(item)
                }
            }
        })
    } else {
        initiateTable(true)
    }
    return tableData
}

export default function tableState(state = initialState, action) {
    switch (action.type) {
        case EXPAND:
            return {
                tableData: expandRow(action.to_expand_id)
            }
        break
        case FILTER:
            return {
                tableData: filterTable(action)
            }
        break
        default:
            return state
    }
}
