var AppStore, React, ReportsTable, State, TableControl;

React = require("react");

TableControl = require("./TableControl.js");

State = require("./State.js");

AppStore = require("../stores/AppStore.js");

ReportsTable = React.createClass({
  getInitialState: function() {
    return {
      states: AppStore.getDataList(),
      level: "State"
    };
  },
  componentDidMount: function() {
    return AppStore.addChangeListener(this.handleChange);
  },
  componentWillUnmount: function() {
    return AppStore.removeChangeListener(this.handleChange);
  },
  handleChange: function() {
    return this.setState({
      states: AppStore.getDataList(),
      level: AppStore.getSelectedFilter()
    });
  },
  render: function() {
    var states, tabelClass;
    tabelClass = "table " + this.state.level;
    states = this.state.states.map((function(_this) {
      return function(s) {
        return React.createElement(State, {
          "key": s.id,
          "state": s,
          "displayLevel": _this.state.level
        });
      };
    })(this));
    return React.createElement("div", {
      "className": tabelClass
    }, React.createElement(TableControl, null), React.createElement("div", {
      "className": "table-heading"
    }, React.createElement("div", {
      "className": "table-heading-cell"
    }, " Regions "), React.createElement("div", {
      "className": "table-heading-cell"
    }, " Last inpot "), React.createElement("div", {
      "className": "table-heading-cell"
    }, " Number of forms "), React.createElement("div", {
      "className": "table-heading-cell"
    }, " Number of Voters "), React.createElement("div", {
      "className": "table-heading-cell"
    }, " Update ")), states);
  }
});

module.exports = ReportsTable;
