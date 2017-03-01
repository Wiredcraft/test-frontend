AppDispatcher = require "../dispatcher/AppDispatcher.cjsx"
AppConstants = require "../constants/AppConstants.cjsx"
EventEmitter = require("events").EventEmitter
assign = require "react/lib/Object.assign"
dataAPI = require "../../utils/dataAPI.coffee"

ActionTypes = AppConstants.ActionTypes

dataAPI.setDataSource JSON.parse(localStorage.getItem("records"))
dataList = dataAPI.getAllRecords()
selectedFilter = ""
searchKeywords = ""

setDataList = () ->
  dataAPI.setDataSource JSON.parse(localStorage.getItem("records"))
  dataList = dataAPI.searchRecords selectedFilter, searchKeywords

setFilter = (filter) ->
  selectedFilter = filter

setKeyword = (keywords) ->
  searchKeywords = keywords

AppStore = assign {}, EventEmitter.prototype,
  getDataList: ->
    dataList

  getSelectedFilter: ->
    selectedFilter

  emitChange: ->
    @emit "change"

  addChangeListener: (callback) ->
    @on "change", callback

  removeChangeListener: (callback) ->
    @removeListener "change", callback

AppDispatcher.register (action) ->

  switch action.type

    when ActionTypes.CHANGE_FILTER
      setFilter action.text

    when ActionTypes.SEARCH_KEYWORDS
      setKeyword action.text
      setDataList()

    else
      return

  AppStore.emitChange()

  return true

module.exports = AppStore
