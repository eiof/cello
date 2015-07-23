'use strict';

var TrelloBackbone = require('./trello-backbone.js');

var List = TrelloBackbone.Model.extend({
	urlRoot: 'lists',
});

module.exports = List;
