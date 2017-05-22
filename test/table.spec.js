import React from 'react';
import TestUtils from 'react-dom/test-utils';

import * as tableActions from '../app/actions/index'

import TableRow from '../app/components/tableRow';
import Table from '../app/components/table';
import mockupData from '../app/reducers/mockup'

describe('Table', () => {
    beforeEach(function () {
        const mockupData = mockupData;
    });

    it('should render table title', () => {
        const element = TestUtils.renderIntoDocument(<TableRow isTitle={true}/>);
        const tableHeader = TestUtils.scryRenderedDOMComponentsWithClass(element, 'table-row-header');
        expect(tableHeader.length).toBe(1);
    });

    it('should render table with data', () => {
        const element = TestUtils.renderIntoDocument(<Table tableData={mockupData}/>);
        const rows = TestUtils.scryRenderedDOMComponentsWithClass(element, 'table-row');
        expect(rows.length).toBe(4);
    });

    // it('should expand correctly', () => {
    //     const element = TestUtils.renderIntoDocument(<Table tableData={mockupData} _expand={tableActions._expand}/>);
    //     const expandButtons = TestUtils.scryRenderedDOMComponentsWithClass(element, 'table-row-title-region-expand');
    //     console.log(expandButtons[1]);
    //     TestUtils.Simulate.click(expandButtons[1]);
    //     const rows = TestUtils.scryRenderedDOMComponentsWithClass(element, 'table-row');
    //     expect(rows.length).toBe(5);
    // });
})
