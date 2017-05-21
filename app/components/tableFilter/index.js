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
        this.setState({filterValue: ''})
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
                <div className='drop-down-menu-container'>
                    <span className='filter-attr'>{filterRow}</span>
                    <div className='fa fa-sort-desc drop-down-menu-icon' onClick={this.showDropDownMenu.bind(this)}></div>
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
                <input className='search-keywords' type='text' placeholder='Search'
                    onChange={this.setFilterValue.bind(this)}
                    onKeyUp={(e)=>{
                        if (e.key === 'Enter') {
                            this.props._search(filterRow, filterValue)
                        }
                    }}
                    value={filterValue}/>
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
