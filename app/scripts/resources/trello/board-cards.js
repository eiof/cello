'use strict';

var TrelloBackbone = require('./trello-backbone.js');
var Cards = require('./cards.js');

var BoardCards = Cards.extend({
	urlRoot: 'boards/{boardId}/cards?members=true',
	initialize: function (models, options) {
		this.relationships = {
			boardId: options.boardId
		};
		TrelloBackbone.Model.prototype.initialize.call(models, options);
	},
});

module.exports = BoardCards;
