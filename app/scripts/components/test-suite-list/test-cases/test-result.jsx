'use strict';

var React = require('react');
var Label = require('react-bootstrap').Label;

var TestResult = React.createClass({
	propTypes: {
		testResult: React.PropTypes.object.isRequired
	},
	render: function () {
		return (
			<Label bsStyle={this.props.testResult.style}>{this.props.testResult.value}</Label>
		);
	}
});

module.exports = TestResult;
