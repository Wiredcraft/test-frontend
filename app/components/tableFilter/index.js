import React, {Component} from 'react'
import './tableFilter.scss'

export default class tableFilter extends Component {
    constructor() {
        super()
        this.state = {
            showFilters: false,
            filterRow: 'Filter'
        }
    }

    filterBy(index) {
        this.setState({showFilters: false, filterRow: this.props.filters[index]})
    }

    showDropDownMenu() {
        this.setState({showFilters: true})
    }

    render() {
        return (
            <div className='table-filter'>
                <div className='drop-down-menu'>
                    <span className='filter-attr'>{this.state.filterRow}</span>
                    <div className='fa fa-sort-desc drop-down-menu-icon' onClick={this.showDropDownMenu.bind(this)}>
                        {this.state.showFilters === false
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
                <input className='search-keywords' type='text' placeholder='Search'/>
                <button className='fa fa-search fa-lg search-button'/>
            </div>
        )
    }
}

tableFilter.defaultProps = {
    filters: ['Region', 'Last Input']
}
