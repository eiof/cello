'use strict';

var CelloDispatcher = require('../cello-dispatcher.js');
var ActionTypes = require('../cello-constants.js').ActionTypes;
var Boards = require('../resources/trello/boards.js');

module.exports = {
	switchProjectId: function (projectId) {
		CelloDispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_CURRENT_PROJECT,
			projectId: projectId
		});
	},
	fetchProjects: function () {
		var boards = new Boards();
		boards.on('sync', function () {
			CelloDispatcher.dispatch({
				actionType: ActionTypes.RECEIVE_PROJECTS,
				projects: this.models
			}, this);
		});
		boards.fetch();
	}
};
