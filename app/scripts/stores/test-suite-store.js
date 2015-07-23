'use strict';

var CelloDispatcher = require('../cello-dispatcher.js');
var ActionTypes = require('../cello-constants.js').ActionTypes;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _currentId = null;
var _testSuites = {};
var CHANGE = 'change';
var SWITCH = 'switch';

var _setTestSuites = function (testSuites) {
	_testSuites = testSuites;
};

var _setCurrentId = function (testSuiteId) {
	_currentId = testSuiteId;
};

var TestSuiteStore = assign({}, EventEmitter.prototype, {
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
    return _testSuites[id];
  },
  getAll: function () {
    return _testSuites;
  },
	getCurrentId: function () {
		return _currentId;
	}
});

TestSuiteStore.dispatchToken = CelloDispatcher.register(function(payload) {
  switch (payload.actionType) {
    case ActionTypes.RECEIVE_CURRENT_TEST_SUITE:
			_setCurrentId(payload.testSuiteId);
			TestSuiteStore.emitSwitch();
      break;
		case ActionTypes.RECEIVE_TEST_SUITES:
			_setTestSuites(payload.testSuites);
			TestSuiteStore.emitChange();
			_setCurrentId('all');
			TestSuiteStore.emitSwitch();
			break;
    default:
			return;
  }
});

module.exports = TestSuiteStore;
