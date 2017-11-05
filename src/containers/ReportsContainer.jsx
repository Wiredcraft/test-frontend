import React from 'react';
import FilterBar from '../components/FilterBar';
import Filter from '../components/Filter';
import Search from '../components/Search';
import Table from '../components/Table/Table';
import data from '../data/report.json';

/**
 * ReportsContainer Component
 */
class ReportsContainer extends React.Component {
    state = {
        data: data,
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
    onFilter = filter => {
        this.setState({ ...this.state, activeFilter: filter, filterIsOpen: false });
    }

    /**
     * toggle callback
     */
    onToggleFilter = () => {
        this.setState({ ...this.state, filterIsOpen: !this.state.filterIsOpen });
    }

    /**
     * on search handler
     * @param {String} term
     */
    onSearch = term => {
        this.setState({ ...this.state, searchTerm: term });
    };

    /**
     * get children
     * @param {Array} ids
     * @return {Array}
     */
    getChildren = ids => {
        return this.state.data.filter(({ id }) => ids.includes(id));
    }

    /**
     * render
     */
    render() {
        const { headers, data, activeFilter, searchTerm } = this.state;
        const { onToggleFilter, onFilter, getChildren, onSearch } = this;
        const dataset = data
            .filter(({ type }) => type === activeFilter)
            .filter(({ name }) => !searchTerm ? true : name.toLowerCase().includes(searchTerm.toLowerCase()));

        return [
            <FilterBar key="filterbar">
                <Filter options={this.state.filters} onToggle={onToggleFilter} onFilter={onFilter} isOpen={this.state.filterIsOpen} />
                <Search onChange={onSearch} activeTerm={searchTerm} />
            </FilterBar>,
            <Table headers={this.state.headers} dataset={dataset} getChildren={getChildren} key="table" />
        ];
    }
}

export default ReportsContainer;
