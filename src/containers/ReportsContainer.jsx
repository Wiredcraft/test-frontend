import React from 'react';
import Table from '../components/Table/Table';
import Filter from '../components/Filter';
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
        filterIsOpen: false
    };

    onFilter = filter => {
        this.setState({ ...this.state, activeFilter: filter, filterIsOpen: false });
    }

    onToggleFilter = () => {
        this.setState({ ...this.state, filterIsOpen: !this.state.filterIsOpen });
    }

    getChildren = ids => {
        return this.state.data.filter(({ id }) => ids.includes(id));
    }

    render() {
        const { headers, data, activeFilter } = this.state;
        const { onToggleFilter, onFilter, getChildren } = this;
        const dataset = data.filter(({ type }) => type === activeFilter);

        return [
            <Filter options={this.state.filters} onToggle={onToggleFilter} onFilter={onFilter} key="filter" isOpen={this.state.filterIsOpen} />,
            <Table headers={this.state.headers} dataset={dataset} getChildren={getChildren} key="table" />
        ];
    }
}

export default ReportsContainer;
