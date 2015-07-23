'use strict';

var React = require('react');
var Input = require('react-bootstrap').Input;
var ModalTrigger = require('react-bootstrap').ModalTrigger;
var ProjectModal = require('../project-modal/project-modal.jsx');
var FontAwesome = require('../utils/font-awesome.jsx');
var TestSuiteActionCreator = require('../../actions/test-suite-action-creator.js');
var TestSuiteStore = require('../../stores/test-suite-store.js');
var ProjectStore = require('../../stores/project-store.js');

var TestSuiteSelect = React.createClass({
	getInitialState: function () {
		return {
			value: 'all',
			projectId: ProjectStore.getCurrentId(),
			testSuites: []
		};
	},
	componentWillMount: function () {
		ProjectStore.addSwitchListener(this._onProjectChange);
		TestSuiteStore.addChangeListener(this._onTestSuitesChange);
  },
	componentDidMount: function () {
		this._fetchTestSuitesForProject();
	},
	componentDidUpdate: function (prevProps, prevState) {
		if (prevState.value !== this.state.value) {
			TestSuiteActionCreator.switchTestSuiteId(this.state.value);
		}
		if (prevState.projectId !== this.state.projectId) {
			this._fetchTestSuitesForProject();
		}
	},
	componentWillUnmount: function () {
		TestSuiteStore.removeChangeListener(this._onTestSuitesChange);
  },
	_fetchTestSuitesForProject: function () {
		TestSuiteActionCreator.fetchTestSuitesForProject(this.state.projectId);
	},
	_onProjectChange: function () {
		this.setState({projectId: ProjectStore.getCurrentId()});
	},
	_onTestSuitesChange: function () {
    this.setState({testSuites: TestSuiteStore.getAll()});
  },
	_handleValueChange: function (e) {
		if (e.target.value !== this.state.value) {
			this.setState({value: e.target.value});
		}
	},
	renderOptions: function () {
		return this.state.testSuites.map(function (testSuite) {
			return (
				<option key={testSuite.get('id')} value={testSuite.get('id')}>{testSuite.get('name')}</option>
			);
		});
	},
	render: function () {
		var options = this.renderOptions();
		var testSuiteLabel = (
			<span>Test Suite
				<ModalTrigger modal={<ProjectModal />}>
					<a href='#'> <FontAwesome icon='cog' /></a>
				</ModalTrigger>
			</span>
		);
		return (
			<Input type='select' label={testSuiteLabel} onChange={this._handleValueChange} value={this.state.value}>
				<option key={'all'} value='all'>All</option>
				{options}
			</Input>
		);
	}
});

module.exports = TestSuiteSelect;
