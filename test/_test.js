import React from 'react/addons';
import Header from '../scripts/components/Header/Header';
let TestUtils = React.addons.TestUtils;

describe('test case should faild', ()=> {
  it('hello test case', function() {
    expect(true).toBe(false);
  });
});


describe('test case should work', ()=> {
  it('hello test case', function() {
    let dom = TestUtils.renderIntoDocument(<Header />);
    expect(dom !== undefined).toBe(true);
  });
});
