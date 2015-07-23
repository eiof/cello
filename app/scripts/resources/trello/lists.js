'use strict';

var TrelloBackbone = require('./trello-backbone.js');
var List = require('./list.js');

var Lists = TrelloBackbone.Collection.extend({
	urlRoot: 'boards/{boardId}/lists?fields=name',
	model: List,
	initialize: function (models, options) {
		this.relationships = {
			boardId: options.boardId
		};
		TrelloBackbone.Collection.prototype.initialize.call(models, options);
	},
});

module.exports = Lists;
