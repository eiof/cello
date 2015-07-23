'use strict';

var TrelloBackbone = require('./trello-backbone.js');

var Board = TrelloBackbone.Model.extend({
	urlRoot: 'boards',
});

module.exports = Board;
