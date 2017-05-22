import React from 'react';
import TestUtils from 'react-dom/test-utils';

import TableFilter from '../app/components/tableFilter';

describe('TableFilter', () => {
    it('should show drop down icon', () => {
        const element = TestUtils.renderIntoDocument(<TableFilter/>);
        const showDropDownMenu = TestUtils.scryRenderedDOMComponentsWithClass(element, 'drop-down-menu-icon');
        expect(showDropDownMenu[0] !== undefined).toBe(true);
    });

    it('should show drop down menu if click', () => {
        const element = TestUtils.renderIntoDocument(<TableFilter filters={['Region', 'Last Input']}/>);
        const showDropDownMenu = TestUtils.scryRenderedDOMComponentsWithClass(element, 'drop-down-menu-icon')[0];
        let dropDownItems = TestUtils.scryRenderedDOMComponentsWithClass(element, 'drop-down-menu');
        expect(dropDownItems.length === 0).toBe(true);

        TestUtils.Simulate.click(showDropDownMenu);
        dropDownItems = TestUtils.scryRenderedDOMComponentsWithClass(element, 'drop-down-menu');
        expect(dropDownItems.length > 0).toBe(true);
    });

    it('should hide drop down menu if select', () => {
        const element = TestUtils.renderIntoDocument(<TableFilter filters={['Region', 'Last Input']}/>);
        const showDropDownMenu = TestUtils.scryRenderedDOMComponentsWithClass(element, 'drop-down-menu-icon')[0];

        TestUtils.Simulate.click(showDropDownMenu);
        let dropDownItems = TestUtils.scryRenderedDOMComponentsWithClass(element, 'drop-down-menu-content');
        expect(dropDownItems.length > 0).toBe(true);

        const selectedItem = dropDownItems[0];
        TestUtils.Simulate.click(selectedItem);
        dropDownItems = TestUtils.scryRenderedDOMComponentsWithClass(element, 'drop-down-menu');
        expect(dropDownItems.length > 0).toBe(false);
    });
})
