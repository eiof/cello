'use strict';

var CelloDispatcher = require('../cello-dispatcher.js');
var ActionTypes = require('../cello-constants.js').ActionTypes;
var BoardCards = require('../resources/trello/board-cards.js');
var ListCards = require('../resources/trello/list-cards.js');

module.exports = {
	switchTestCaseId: function (testCaseId) {
		CelloDispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_CURRENT_TEST_CASE,
			testCaseId: testCaseId
		}, this);
	},
	fetchTestCases: function (options) {
		try {
			if (options.testSuiteId) this.fetchTestCasesForTestSuite(options.testSuiteId);
			else if (options.projectId) this.fetchTestCasesForProject(options.projectId);
		} catch (e) {
			// TODO: Make errors more verbose
			console.log(e);
		}
	},
	fetchTestCasesForProject: function (projectId) {
		var cards = new BoardCards([], {boardId: projectId});
		cards.on('sync', function () {
			CelloDispatcher.dispatch({
				actionType: ActionTypes.RECEIVE_TEST_CASES,
				testCases: this.models
			}, this);
		});
		cards.fetch();
	},
	fetchTestCasesForTestSuite: function (testSuiteId) {
		var cards = new ListCards([], {listId: testSuiteId});
		cards.on('sync', function () {
			CelloDispatcher.dispatch({
				actionType: ActionTypes.RECEIVE_TEST_CASES,
				testCases: this.models
			}, this);
		});
		cards.fetch();
	}
};
