import React from 'react';
import TestUtils from 'react-dom/test-utils';

import Header from '../app/components/header';

describe('Header', () => {
    it('should render correctly', () => {
        const element = TestUtils.renderIntoDocument(<Header/>);
        const assertResult = TestUtils.scryRenderedDOMComponentsWithClass(element, 'header-container');
        expect(assertResult.length).toBe(1);
    });
});
