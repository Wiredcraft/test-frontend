var React, Township, classNames;

React = require("react");

classNames = require("classnames");

Township = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    var tClassNames, township;
    township = this.props.township;
    tClassNames = classNames("table-row", {
      hidden: this.props.hidden
    });
    return React.createElement("div", {
      "className": tClassNames
    }, React.createElement("div", {
      "className": "table-cell"
    }, React.createElement("div", {
      "className": "item-title item-township"
    }, React.createElement("span", {
      "className": "icon icon-tag icon-prepend"
    }, " T "), township.title)), React.createElement("div", {
      "className": "table-cell"
    }, " ", township.last_inpot, " "), React.createElement("div", {
      "className": "table-cell"
    }, " ", township.form_num, " "), React.createElement("div", {
      "className": "table-cell"
    }, " ", township.voter_num, " "), React.createElement("div", {
      "className": "table-cell"
    }, " ", township.update, " "));
  }
});

module.exports = Township;
