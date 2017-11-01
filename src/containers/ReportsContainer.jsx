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

    render() {
        return <Table headers={this.state.headers} dataset={this.state.report.states} />;
    }
}

export default ReportsContainer;
