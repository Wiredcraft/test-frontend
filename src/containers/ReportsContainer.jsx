import React from 'react';
import FilterBar from '../components/FilterBar';
import Filter from '../components/Filter';
import Search from '../components/Search';
import Table from '../components/Table/Table';
import mockData from '../data/report.json';

/**
 * ReportsContainer Component
 */
class ReportsContainer extends React.Component {
    state = {
        data: mockData,
        headers: [
            { title: 'Region', selector: 'name' },
            { title: 'Last input', selector: 'last' },
            { title: 'Number of forms', selector: 'forms' },
            { title: 'Number of voters', selector: 'voters' },
            { title: 'Update', selector: 'update' }
        ],
        filters: ['state', 'district', 'township'],
        activeFilter: 'state',
        searchTerm: '',
        filterIsOpen: false
    };

    /**
     * filter callback
     * @param {String} filter
     */
    onFilter = (filter) => {
        this.setState({
            ...this.state,
            activeFilter: filter,
            filterIsOpen: false
        });
    }

    /**
     * toggle callback
     */
    onToggleFilter = () => {
        this.setState({
            ...this.state,
            filterIsOpen: !this.state.filterIsOpen
        });
    }

    /**
     * on search handler
     * @param {String} term
     */
    onSearch = (term) => {
        this.setState({
            ...this.state,
            searchTerm: term
        });
    };

    /**
     * get children
     * @param {Array} ids
     * @return {Array}
     */
    getChildren = ids => this.state.data.filter(({ id }) => ids.includes(id));

    /**
     * filter data
     * @param {Array} data
     * @return {Array}
     */
    filterData(data) {
        const { searchTerm, activeFilter } = this.state;
        return data
            .filter(({ type }) => type === activeFilter)
            .filter(({ name }) =>
                (!searchTerm ? true : name.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    /**
     * render
     */
    render() {
        const {
            headers, data, searchTerm, filters, filterIsOpen
        } = this.state;
        const {
            onToggleFilter, onFilter, getChildren, onSearch
        } = this;

        return [
            <FilterBar key="filterbar">
                <Filter
                    options={filters}
                    onToggle={onToggleFilter}
                    onFilter={onFilter}
                    isOpen={filterIsOpen}
                />
                <Search onChange={onSearch} activeTerm={searchTerm} />
            </FilterBar>,
            <Table headers={headers} dataset={this.filterData(data)} getChildren={getChildren} key="table" />
        ];
    }
}

export default ReportsContainer;
