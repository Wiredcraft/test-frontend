AppDispatcher = require "../dispatcher/AppDispatcher.cjsx"
AppConstants = require "../constants/AppConstants.cjsx"

module.exports = 
  changeFilter: (text) ->
    AppDispatcher.dispatch
      type: AppConstants.ActionTypes.CHANGE_FILTER
      text: text