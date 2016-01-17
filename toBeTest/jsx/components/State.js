var District, React, State, classNames;

React = require("react");

District = require("./District.js");

classNames = require("classnames");

State = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if (this.props.displayLevel !== nextProps.displayLevel) {
      return this.setState({
        expanded: false
      });
    }
  },
  handleClick: function(event) {
    var status;
    status = !this.state.expanded;
    return this.setState({
      expanded: status
    });
  },
  render: function() {
    var displayLevel, districtHidden, district_num, districts, state, stateClass, toggleClass;
    state = this.props.state;
    displayLevel = this.props.displayLevel;
    districtHidden = (function(_this) {
      return function() {
        switch (displayLevel) {
          case "State":
            return !_this.state.expanded;
          case "District":
            return false;
          case "Township":
            return true;
          default:
            return !_this.state.expanded;
        }
      };
    })(this)();
    stateClass = classNames("table-row", {
      hidden: displayLevel === "District" || displayLevel === "Township"
    });
    toggleClass = classNames("subitem-toggle", {
      expanded: this.state.expanded,
      collapsed: !this.state.expanded
    });
    if (state.sub_records && state.sub_records.length > 0) {
      district_num = state.sub_records.length;
      districts = state.sub_records.map((function(_this) {
        return function(d) {
          return React.createElement(District, {
            "key": d.id,
            "district": d,
            "hidden": districtHidden,
            "displayLevel": displayLevel,
            "parentExpanded": _this.state.expanded
          });
        };
      })(this));
      return React.createElement("div", null, React.createElement("div", {
        "className": stateClass
      }, React.createElement("div", {
        "className": "table-cell"
      }, React.createElement("div", {
        "className": "item-title"
      }, React.createElement("span", {
        "className": "icon icon-tag icon-prepend"
      }, " S "), state.title, React.createElement("span", {
        "className": "icon icon-download icon-append"
      }, " "), React.createElement("div", {
        "className": toggleClass,
        "onClick": this.handleClick
      }, React.createElement("span", null, " ", district_num, " "), "Districts"))), React.createElement("div", {
        "className": "table-cell"
      }, " ", state.last_inpot, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", state.form_num, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", state.voter_num, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", state.update, " ")), districts);
    } else {
      return React.createElement("div", {
        "className": stateClass
      }, React.createElement("div", {
        "className": "table-cell"
      }, React.createElement("div", {
        "className": "item-title"
      }, React.createElement("span", {
        "className": "icon icon-tag icon-prepend"
      }, " S "), state.title, React.createElement("span", {
        "className": "icon icon-download icon-append"
      }, " "))), React.createElement("div", {
        "className": "table-cell"
      }, " ", state.last_inpot, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", state.form_num, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", state.voter_num, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", state.update, " "));
    }
  }
});

module.exports = State;
