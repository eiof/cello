'use strict';

var Backbone = require('backbone');
var TrelloConnect = require('./trello-connect');

var TrelloBackbone = {
	Model: Backbone.Model.extend({
		url: function () {
			return TrelloBackbone.Model.prototype.url.call();
		}
	}),
	Collection: Backbone.Collection.extend({
		url: function () {
			return TrelloBackbone.Collection.prototype.url.call();
		}
	})
};

TrelloBackbone.Model.prototype.initialize = function (attrs, options) {
	this.relationships = this.relationships || {};
	Backbone.Model.prototype.initialize.call(attrs, options);
};

TrelloBackbone.Model.prototype.initialize = function (models, options) {
	this.relationships = this.relationships || {};
	Backbone.Collection.prototype.initialize.call(models, options);
};

TrelloBackbone.Model.prototype.url = function () {
	try {
		var queryParamSymbol = this.urlRoot.indexOf('?') <= 0 ? '?' : '&';
		if (this.relationships) {
			var relationshipIdentifiers = Object.keys(this.relationships);
			relationshipIdentifiers.map(function (relationshipIdentifier) {
				var re = new RegExp('\{' + relationshipIdentifier + '\}','g');
				this.urlRoot = this.urlRoot.replace(re, this.relationships[relationshipIdentifier]);
			}.bind(this));
		}
		return TrelloConnect.trelloApi + this.urlRoot + '/' + this.id + queryParamSymbol + TrelloConnect.params();
	} catch(e) {
		console.log('TrelloBackbone.Model: Resolve Url Error. ' + e);
	}
};

TrelloBackbone.Collection.prototype.url = function () {
	try {
		var queryParamSymbol = this.urlRoot.indexOf('?') <= 0 ? '?' : '&';
		if (this.relationships) {
			var relationshipIdentifiers = Object.keys(this.relationships);
			relationshipIdentifiers.map(function (relationshipIdentifier) {
				var re = new RegExp('\{' + relationshipIdentifier + '\}','g');
				this.urlRoot = this.urlRoot.replace(re, this.relationships[relationshipIdentifier]);
			}.bind(this));
		}
		return TrelloConnect.trelloApi + this.urlRoot + queryParamSymbol + TrelloConnect.params();
	} catch(e) {
		console.log('TrelloBackbone.Collection: Resolve Url Error. ' + e);
	}
};

module.exports = TrelloBackbone;
