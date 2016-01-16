var AppConstants, AppDispatcher;

AppDispatcher = require("../dispatcher/AppDispatcher.js");

AppConstants = require("../constants/AppConstants.js");

module.exports = {
  searchKeywords: function(text) {
    return AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.SEARCH_KEYWORDS,
      text: text
    });
  }
};
