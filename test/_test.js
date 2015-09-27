import React from 'react/addons';
import SearchBar from '../scripts/components/SearchBar/SearchBar';
let TestUtils = React.addons.TestUtils;

describe('SearchBar should work', ()=> {
  it('Test case should work', function() {
    let dom = TestUtils.renderIntoDocument(<SearchBar />);
    let resDom = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'SearchBar');
    expect(resDom.length).toBe(1);
  });

  it('Should have button for drop menu', function() {
    let dom = TestUtils.renderIntoDocument(<SearchBar />);
    let dropListBtns = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'dropMenuIcon');
    expect(dropListBtns[0] != undefined ).toBe(true);
  });

  it('Should display dropMenu', function() {
    let dom = TestUtils.renderIntoDocument(<SearchBar filters={['Region', 'Last Inpot']}/>);
    let dropListBtn = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'dropMenuIcon')[0];
    let dropItems = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'dropItemArea');
    expect(dropItems.length === 0).toBe(true);

    TestUtils.Simulate.click(dropListBtn);
    dropItems = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'dropItemArea');
    expect(dropItems.length > 0).toBe(true);
  });

  it('Should hide dropMenu after item selected', function() {
    let dom = TestUtils.renderIntoDocument(<SearchBar filters={['Region', 'Last Inpot']}/>);
    let dropListBtn = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'dropMenuIcon')[0];

    TestUtils.Simulate.click(dropListBtn);
    let dropItems = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'dropItemArea');
    expect(dropItems.length > 0).toBe(true);

    let item = dropItems[0];
    TestUtils.Simulate.click(item);
    dropItems = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'dropItemArea');
    expect(dropItems.length > 0).toBe(false);
  });
});
