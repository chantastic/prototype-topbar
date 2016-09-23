/**
 * TodoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  showOrgMenu: function () {
    console.log(AppDispatcher);
    AppDispatcher.handleViewAction({
      actionType: 'SHOW_ORG_MENU'
    });
  }
};
