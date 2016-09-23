var AppDispatcher = require('../dispatcher/AppDispatcher');

var EventEmitter = require('events').EventEmitter;

var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var TopbarStore =  merge(EventEmitter.prototype, {
  dispatcherIndex: AppDispatcher.register(function() {})
//   dispaatcherIndex: AppDispatcher.register(function(payload) {
//     console.log(payload);
//   })
});

module.exports = TopbarStore;
