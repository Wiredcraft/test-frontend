var District, React, Township, classNames;

React = require("react");

classNames = require("classnames");

Township = require("./Township.js");

District = React.createClass({
  getInitialState: function() {
    return {
      expanded: !this.props.hidden
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if (this.props.displayLevel !== nextProps.displayLevel || !this.props.parentExpanded) {
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
    var dClassNames, displayLevel, district, toggleClass, townshipHidden, township_num, townships;
    district = this.props.district;
    displayLevel = this.props.displayLevel;
    dClassNames = classNames("table-row", {
      hidden: this.props.hidden
    });
    toggleClass = classNames("subitem-toggle", {
      expanded: this.state.expanded,
      collapsed: !this.state.expanded
    });
    townshipHidden = (function(_this) {
      return function() {
        if (displayLevel === "Township") {
          return false;
        } else {
          return !_this.state.expanded;
        }
      };
    })(this)();
    if (district.sub_records && district.sub_records.length > 0) {
      township_num = district.sub_records.length;
      townships = district.sub_records.map((function(_this) {
        return function(t) {
          return React.createElement(Township, {
            "key": t.id,
            "township": t,
            "hidden": townshipHidden
          });
        };
      })(this));
      return React.createElement("div", null, React.createElement("div", {
        "className": dClassNames
      }, React.createElement("div", {
        "className": "table-cell"
      }, React.createElement("div", {
        "className": "item-title item-district"
      }, React.createElement("span", {
        "className": "icon icon-tag icon-prepend"
      }, " D "), district.title, React.createElement("span", {
        "className": "icon icon-download icon-append"
      }, " "), React.createElement("div", {
        "className": toggleClass,
        "onClick": this.handleClick
      }, React.createElement("span", null, " ", township_num, " "), "Townships"))), React.createElement("div", {
        "className": "table-cell"
      }, " ", district.last_inpot, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", district.form_num, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", district.voter_num, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", district.update, " ")), townships);
    } else {
      return React.createElement("div", {
        "className": dClassNames
      }, React.createElement("div", {
        "className": "table-cell"
      }, React.createElement("div", {
        "className": "item-title item-district"
      }, React.createElement("span", {
        "className": "icon icon-tag icon-prepend"
      }, " D "), district.title, React.createElement("span", {
        "className": "icon icon-download icon-append"
      }, " "))), React.createElement("div", {
        "className": "table-cell"
      }, " ", district.last_inpot, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", district.form_num, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", district.voter_num, " "), React.createElement("div", {
        "className": "table-cell"
      }, " ", district.update, " "));
    }
  }
});

module.exports = District;
