'use strict';

var React = require('react');
var Table = require('react-bootstrap').Table;
var FontAwesome = require('../utils/font-awesome.jsx');
var TestSuiteListItem = require('./test-suite-list-item');
var TestCaseStore = require('../../stores/test-case-store.js');
var TestCaseActionCreator = require('../../actions/test-case-action-creator.js');
var TestSuiteStore = require('../../stores/test-suite-store.js');
var ProjectStore = require('../../stores/project-store.js');
var Loading = require('../utils/loading.jsx');

var TestSuiteList = React.createClass({
	getInitialState: function () {
		return {
			testCases: [],
			displayLoading: false
		};
	},
	componentWillMount: function () {
		TestSuiteStore.addSwitchListener(this._onTestSuitesSwitch);
		TestCaseStore.addChangeListener(this._onTestCasesChange);
  },
	componentDidMount: function () {
		this._fetchTestCases();
	},
	componentWillUnmount: function () {
		TestCaseStore.removeChangeListener(this._onTestSuiteChange);
  },
	_toggleLoading: function (toggle) {
		this.setState({displayLoading: toggle});
	},
	_fetchTestCases: function () {
		this._toggleLoading(true);
		var currentTestSuiteId = TestSuiteStore.getCurrentId();
		var options = (currentTestSuiteId && currentTestSuiteId !== 'all') ?
			{testSuiteId: currentTestSuiteId} : {projectId: ProjectStore.getCurrentId()};
		TestCaseActionCreator.fetchTestCases(options);
	},
	_onTestSuitesSwitch: function () {
		this._fetchTestCases();
	},
	_onTestCasesChange: function () {
		this.setState({testCases: TestCaseStore.getAll()});
		this._toggleLoading(false);
	},
	_getTableHeaders: function () {
		var tableHeaders = [];
		var columns = ['Title', 'Assignee', 'Last Test Result', 'Last Test Run', 'Last Activity'];
		columns.forEach(function (column) {
			tableHeaders.push(<th key={column}>{column}</th>);
		});
		return tableHeaders;
	},
	_getListItems: function () {
		return this.state.testCases.map(function (testCase) {
			return <TestSuiteListItem testCase={testCase} />;
		});
	},
	render: function () {
		var tableHeaders = this._getTableHeaders();
		var listItems = this._getListItems();
		return (
			<div>
				<Loading display={this.state.displayLoading} />
				<Table hover>
					<thead>
						<tr>
							{tableHeaders}
						</tr>
					</thead>
					<tbody>
						{listItems}
					</tbody>
				</Table>
			</div>
		);
	}
});

module.exports = TestSuiteList;
