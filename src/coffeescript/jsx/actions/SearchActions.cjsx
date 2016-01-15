AppDispatcher = require "../dispatcher/AppDispatcher.cjsx"
AppConstants = require "../constants/AppConstants.cjsx"

module.exports = 
  searchKeywords: (text) ->
    AppDispatcher.dispatch
      type: AppConstants.ActionTypes.SEARCH_KEYWORDS
      text: text