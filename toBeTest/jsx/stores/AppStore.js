var ActionTypes, AppConstants, AppDispatcher, AppStore, EventEmitter, assign, dataAPI, dataList, searchKeywords, selectedFilter, setDataList, setFilter, setKeyword;

AppDispatcher = require("../dispatcher/AppDispatcher.js");

AppConstants = require("../constants/AppConstants.js");

EventEmitter = require("events").EventEmitter;

assign = require("react/lib/Object.assign");

dataAPI = require("../../utils/dataAPI.js");

ActionTypes = AppConstants.ActionTypes;

dataAPI.setDataSource(JSON.parse(localStorage.getItem("records")));

dataList = dataAPI.getAllRecords();

selectedFilter = "";

searchKeywords = "";

setDataList = function() {
  dataAPI.setDataSource(JSON.parse(localStorage.getItem("records")));
  return dataList = dataAPI.searchRecords(selectedFilter, searchKeywords);
};

setFilter = function(filter) {
  return selectedFilter = filter;
};

setKeyword = function(keywords) {
  return searchKeywords = keywords;
};

AppStore = assign({}, EventEmitter.prototype, {
  getDataList: function() {
    return dataList;
  },
  getSelectedFilter: function() {
    return selectedFilter;
  },
  emitChange: function() {
    return this.emit("change");
  },
  addChangeListener: function(callback) {
    return this.on("change", callback);
  },
  removeChangeListener: function(callback) {
    return this.removeListener("change", callback);
  }
});

AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER:
      setFilter(action.text);
      break;
    case ActionTypes.SEARCH_KEYWORDS:
      setKeyword(action.text);
      setDataList();
      break;
    default:
      return;
  }
  AppStore.emitChange();
  return true;
});

module.exports = AppStore;
