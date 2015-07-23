'use strict';

var React = require('react');
var moment = require('moment');
var TestResults = require('./test-cases/test-result.jsx');

var TestSuiteListItem = React.createClass({
	propTypes: {
		testCase: React.PropTypes.object.isRequired
	},
	render: function () {
		var model = this.props.testCase;
		var lastActivity = model.get('dateLastActivity') ?
			moment(model.get('dateLastActivity')).calendar() : '\u2014';
		var dueDate = model.get('due') ?
			moment(model.get('due')).format('MM/DD/YYYY') : '\u2014';
		var badges = model.get('badges');
		var member = model.get('members')[0] ?
			model.get('members')[0].fullName : '\u2014';
		return (
			<tr key={model.get('id')}>
				<td>{model.get('name')}</td>
				<td>{member}</td>
				<td>
					<TestResults testResult={model.get('testResult')} />
				</td>
				<td>{lastActivity}</td>
				<td>{dueDate}</td>
			</tr>
		);
	}
});

module.exports = TestSuiteListItem;

// var rows = this.collection.map(function (model) {
// 	var lastActivity = model.get('dateLastActivity') ?
// 		moment(model.get('dateLastActivity')).calendar() : '\u2014';
// 	var dueDate = model.get('due') ?
// 		moment(model.get('due')).format('MM/DD/YYYY') : '\u2014';
// 	var badges = model.get('badges');
// 	return (
// 		<tr key={model.get('id')}>
// 			<td className="text-center"><input type='checkbox' /></td>
// 			<td>{model.get('name')}</td>
// 			<td>{model.get('idMembers')[0]}</td>
// 			<td>
// 				<TestResults items={badges.checkItems} itemsChecked={badges.checkItemsChecked} />
// 			</td>
// 			<td>{lastActivity}</td>
// 			<td>{dueDate}</td>
// 		</tr>
// 	);
// });
