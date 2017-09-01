import { combineReducers } from 'redux'
import tableFilter from './filter'
import searchValue from './searchValue'


const tableApp = combineReducers({
    tableFilter,
    searchValue
})

export default tableApp