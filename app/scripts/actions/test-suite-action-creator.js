'use strict';

var CelloDispatcher = require('../cello-dispatcher.js');
var ActionTypes = require('../cello-constants.js').ActionTypes;
var Lists = require('../resources/trello/lists.js');

module.exports = {
	switchTestSuiteId: function (testSuiteId) {
		CelloDispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_CURRENT_TEST_SUITE,
			testSuiteId: testSuiteId
		});
	},
	fetchTestSuitesForProject: function (projectId) {
		var lists = new Lists([], {boardId: projectId});
		lists.on('sync', function () {
			CelloDispatcher.dispatch({
				actionType: ActionTypes.RECEIVE_TEST_SUITES,
				testSuites: this.models
			}, this);
		});
		lists.fetch();
	}
};
