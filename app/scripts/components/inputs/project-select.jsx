'use strict';

var React = require('react');
var Input = require('react-bootstrap').Input;
var ProjectActionCreator = require('../../actions/project-action-creator.js');
var ProjectStore = require('../../stores/project-store.js');

var ProjectSelect = React.createClass({
	getInitialState: function () {
		return {
			value: ProjectStore.getCurrentId(),
			projects: []
		};
	},
	componentWillMount: function () {
		ProjectStore.addChangeListener(this._onProjectsChange);
  },
	componentDidMount: function () {
		ProjectActionCreator.fetchProjects();
	},
	componentDidUpdate: function (prevProps, prevState) {
		if (prevState.value !== this.state.value) {
			ProjectActionCreator.switchProjectId(this.state.value);
		}
	},
	componentWillUnmount: function () {
		ProjectStore.removeChangeListener(this._onProjectsChange);
  },
	_onProjectsChange: function () {
    this.setState({projects: ProjectStore.getAll()});
  },
	_handleValueChange: function (e) {
		if (e.target.value !== this.state.value) {
			this.setState({value: e.target.value});
		}
	},
	renderOptions: function () {
		return this.state.projects.map(function (project) {
			return (
				<option key={project.get('id')} value={project.get('id')}>{project.get('name')}</option>
			);
		});
	},
	render: function () {
		var options = this.renderOptions();
		var projectsLabel = 'Projects';
		return (
			<Input type='select' label={projectsLabel} onChange={this._handleValueChange} value={this.state.value}>
				{options}
			</Input>
		);
	}
});

module.exports = ProjectSelect;
