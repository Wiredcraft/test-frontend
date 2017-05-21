import React, {Component} from 'react'
import './tableFilter.scss'

export default class tableFilter extends Component {
    constructor() {
        super()
        this.state = {
            showFilters: false,
            filterRow: 'Filter',
            filterValue: ''
        }
    }

    filterBy(index) {
        this.setState({showFilters: false, filterRow: this.props.filters[index]})
    }

    showDropDownMenu() {
        this.setState({showFilters: true})
    }

    setFilterValue(e){
        this.setState({
            filterValue: e.target.value
        })
    }

    render() {
        const { filterRow, showFilters, filterValue } = this.state
        return (
            <div className='table-filter'>
                <div className='drop-down-menu'>
                    <span className='filter-attr'>{filterRow}</span>
                    <div className='fa fa-sort-desc drop-down-menu-icon' onClick={this.showDropDownMenu.bind(this)}>
                    {showFilters === false
                    ? null
                    : <div className='drop-down-menu'>
                        {this.props.filters.map((item, index) => {
                            return (
                                <div key={index} className='drop-down-menu-content' onClick={this.filterBy.bind(this, index)}>
                                    <div className='drop-down-menu-item'>{item}</div>
                                </div>
                            )
                        })}
                    </div>
                    }
                    </div>
                </div>
                <input className='search-keywords' type='text' placeholder='Search'
                    onChange={this.setFilterValue.bind(this)} value={filterValue}/>
                <button className='fa fa-search fa-lg search-button' onClick={(e)=>{
                        this.props._search(filterRow, filterValue)
                    }}/>
            </div>
        )
    }
}

tableFilter.defaultProps = {
    filters: [
        'Region',
        'Last Input',
        'Number of forms',
        'Number of Voters',
        'Update'
    ]
}
