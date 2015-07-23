'use strict';

var CelloDispatcher = require('../cello-dispatcher.js');
var ActionTypes = require('../cello-constants.js').ActionTypes;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _currentId = null;
var _testCases = {};
var CHANGE = 'change';
var SWITCH = 'switch';

var TestCaseStore = assign({}, EventEmitter.prototype, {
	emitChange: function () {
    this.emit(CHANGE);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE, callback);
  },
	emitSwitch: function () {
    this.emit(SWITCH);
  },
  addSwitchListener: function (callback) {
    this.on(SWITCH, callback);
  },
  removeSwitchListener: function (callback) {
    this.removeListener(SWITCH, callback);
  },
  get: function (id) {
    return _testCases[id];
  },
  getAll: function () {
    return _testCases;
  },
	getCurrentId: function () {
		return _currentId;
	}
});

TestCaseStore.dispatchToken = CelloDispatcher.register(function(payload) {
  switch (payload.actionType) {
    case ActionTypes.RECEIVE_CURRENT_TEST_CASE:
			_currentId = payload.testCaseId;
			TestCaseStore.emitSwitch();
      break;
		case ActionTypes.RECEIVE_TEST_CASES:
			_testCases = payload.testCases;
			TestCaseStore.emitChange();
			break;
    default:
      return;
  }
});

module.exports = TestCaseStore;
