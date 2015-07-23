'use strict';

var TrelloBackbone = require('./trello-backbone.js');

var misconfigured = {value: 'Misconfigured', style: 'warning'};
var unstarted = {value: 'Unstarted', style: 'default'};
var passed = {value: 'Passed', style: 'primary'};
var failed = {value: 'Failed', style: 'danger'};

var Card = TrelloBackbone.Model.extend({
	urlRoot: 'cards',
	defaults: {
		testResult: misconfigured
	},
	initialize: function () {
		this.set('testResult', this.resolveTestResult());
	},
	resolveTestResult: function () {
		var badges = this.get('badges');
		var testResult = misconfigured;
		if (!!badges.checkItems) {
			if (!!badges.checkItemsChecked) {
				testResult = (badges.checkItemsChecked === badges.checkItems) ?
					passed : failed;
			} else {
				testResult = unstarted;
			}
		}
		return testResult;
	}
});

module.exports = Card;
