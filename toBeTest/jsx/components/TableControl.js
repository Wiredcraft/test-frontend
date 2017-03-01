var FilterActions, React, SearchActions, TableControl, timeout;

React = require("react");

FilterActions = require("../actions/FilterActions.js");

SearchActions = require("../actions/SearchActions.js");

timeout = null;

TableControl = React.createClass({
  handleSelect: function(event) {
    var filter;
    filter = event.target.value;
    return FilterActions.changeFilter(filter);
  },
  handleInput: function(event) {
    this.setState({
      keywords: event.target.value
    });
    clearTimeout(timeout);
    return timeout = setTimeout(function() {
      return SearchActions.searchKeywords(event.target.value);
    }, 1500);
  },
  handleSearch: function(event) {
    return SearchActions.searchKeywords(this.state.keywords);
  },
  render: function() {
    return React.createElement("div", {
      "className": "table-control"
    }, React.createElement("div", {
      "className": "form-inline"
    }, React.createElement("div", {
      "className": "form-group"
    }, React.createElement("div", {
      "className": "select-arrow"
    }, React.createElement("select", {
      "className": "form-control",
      "onChange": this.handleSelect,
      "defaultValue": "State"
    }, React.createElement("option", {
      "value": "State"
    }, " State "), React.createElement("option", {
      "value": "District"
    }, " District "), React.createElement("option", {
      "value": "Township"
    }, " Township ")))), React.createElement("div", {
      "className": "form-group"
    }, React.createElement("input", {
      "type": "text",
      "className": "form-control",
      "placeholder": "Search",
      "onChange": this.handleInput
    })), React.createElement("div", {
      "className": "form-group"
    }, React.createElement("a", {
      "href": "#",
      "className": "button",
      "onClick": this.handleSearch
    }, React.createElement("span", {
      "className": "icon icon-search"
    })))));
  }
});

module.exports = TableControl;
