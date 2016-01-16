var AppConstants, AppDispatcher;

AppDispatcher = require("../dispatcher/AppDispatcher.js");

AppConstants = require("../constants/AppConstants.js");

module.exports = {
  changeFilter: function(text) {
    return AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.CHANGE_FILTER,
      text: text
    });
  }
};
