'use strict';

var Trello = window.Trello;

module.exports = {
	trelloApi: 'https://api.trello.com/1/',
	trelloClient: Trello,
	authorize: function () {
		if (!Trello.token()) {
			// this.getStoredToken(); still trying to figure this part out
			// if (!Trello.token()) {
				this.signIn();
			// }
		}
	},
	params: function () {
		this.authorize();
		var keyParam = 'key=' + Trello.key();
		var tokenParam = 'token=' + Trello.token();
		return keyParam + '&' + tokenParam;
	},
	getStoredToken: function () {
		Trello.authorize({
			interactive: false
		});
	},
	signIn: function () {
		this.signOut();
		Trello.authorize({
			name: 'Cello',
			type: 'redirect',
			scope: {
				read: true,
				write: true,
				account: false
			}
		});
	},
	signOut: function () {
		Trello.deauthorize();
	}
};
