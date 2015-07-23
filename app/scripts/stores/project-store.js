'use strict';

var CelloDispatcher = require('../cello-dispatcher.js');
var ActionTypes = require('../cello-constants.js').ActionTypes;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _currentId = '55649f6bc30f3433290dd58f';
var _projects = {};
var CHANGE = 'change';
var SWITCH = 'switch';

var ProjectStore = assign({}, EventEmitter.prototype, {
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
    return _projects[id];
  },
  getAll: function () {
    return _projects;
  },
	getCurrentId: function () {
		return _currentId;
	}
});

ProjectStore.dispatchToken = CelloDispatcher.register(function(payload) {
  switch (payload.actionType) {
    case ActionTypes.RECEIVE_CURRENT_PROJECT:
			_currentId = payload.projectId;
			ProjectStore.emitSwitch();
      break;
		case ActionTypes.RECEIVE_PROJECTS :
			_projects = payload.projects;
			ProjectStore.emitChange();
			break;
    default:
      return;
  }
});

module.exports = ProjectStore;
