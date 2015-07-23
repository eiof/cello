'use strict';

var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var Alert = require('react-bootstrap').Alert;
var FontAwesome = require('../utils/font-awesome.jsx');
var ProjectSelect = require('../inputs/project-select.jsx');
var DocsWrapper = require('../utils/docs-wrapper.jsx');

var ProjectModal = React.createClass({
	propTypes: {
		onRequestHide: React.PropTypes.func
	},
	getDefaultProps: function () {
		return {
			onRequestHide: this._onRequestHide
		};
	},
	render: function () {
		var mountNode = document.getElementsByTagName('body')[0];
		return (
			<Modal {...this.props} title="Test Suite Settings" container={mountNode} bsSize="small" >
	      <div className="modal-body">
					<Alert bsStyle="warning">
						<p className="text-center"><FontAwesome icon="warning" size="2x" /></p>
						<p>It's recommended that a Cello Project not be editted in Trello.</p>
						<p>
							<DocsWrapper specification="cello-projects">What does this mean?</DocsWrapper>
						</p>
					</Alert>
					<ProjectSelect />
	      </div>
	      <div className="modal-footer">
	        <Button bsStyle="info" onClick={this.props.onRequestHide}>Done</Button>
	      </div>
	    </Modal>
		);
	}
});

module.exports = ProjectModal;
