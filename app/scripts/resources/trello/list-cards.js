'use strict';

var TrelloBackbone = require('./trello-backbone.js');
var Cards = require('./cards.js');

var ListCards = Cards.extend({
	urlRoot: 'lists/{listId}/cards?members=true',
	initialize: function (models, options) {
		this.relationships = {
			listId: options.listId
		};
		TrelloBackbone.Model.prototype.initialize.call(models, options);
	},
});

module.exports = ListCards;
