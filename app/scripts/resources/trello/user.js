'use strict';

var TrelloBackbone = require('./trello-backbone.js');

var User = TrelloBackbone.Model.extend({
	urlRoot: 'member',
	id: 'me'
});

module.exports = User;
