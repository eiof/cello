'use strict';

var TrelloBackbone = require('./trello-backbone.js');
var Card = require('./card.js');

var Cards = TrelloBackbone.Collection.extend({
	urlRoot: 'cards',
	model: Card
});

module.exports = Cards;
