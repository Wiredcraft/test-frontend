import React from 'react';
import Table from '../components/Table/Table';
import data from '../data/report.json';

/**
 * ReportsContainer Component
 */
class ReportsContainer extends React.Component {
    state = {
        report: data,
        headers: [
            { title: 'Region', selector: 'name' },
            { title: 'Last input', selector: 'last' },
            { title: 'Number of forms', selector: 'forms' },
            { title: 'Number of voters', selector: 'voters' },
            { title: 'Update', selector: 'update' }
        ]
    };

    getChildren = ids => {
        return this.state.report.filter(({ id }) => ids.includes(id));
    }

    render() {
        const dataset = this.state.report.filter(({ type }) => type === 'state');
        return <Table headers={this.state.headers} dataset={dataset} getChildren={this.getChildren} />;
    }
}

export default ReportsContainer;
