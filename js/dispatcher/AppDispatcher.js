var Dispatcher = require('flux').Dispatcher;

var merge = require('react/lib/merge');

var AppDispatcher = merge(Dispatcher.prototype, {
  $Dispatcher_callbacks: {},

  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
