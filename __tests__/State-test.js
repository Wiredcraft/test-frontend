jest.dontMock("../toBeTest/jsx/components/State");

var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var State = require("../toBeTest/jsx/components/State");

describe("State", function() {

  it("should exists", function() {
    var s = {
      id: "0005",
      title: "Shan State",
      level: "State",
      last_inpot: "2014/10/12",
      form_num: "123,456",
      voter_num: "123,456",
      update: "342,456",
      sub_records: []
    };
    var stateComp = TestUtils.renderIntoDocument(
      React.createElement(State, {
                "key": s.id,
                "state": s,
                "displayLevel": "State"
      })
    );
    expect(TestUtils.isCompositeComponent(stateComp)).toBeTruthy();

  });
});
