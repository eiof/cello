'use strict';

var TrelloBackbone = require('./trello-backbone.js');
var Board = require('./board.js');

var Boards = TrelloBackbone.Collection.extend({
	urlRoot: 'member/me/boards',
	model: Board
});

module.exports = Boards;
