'use strict';

/* UI */
var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var TestSuiteSelect = require('../inputs/test-suite-select.jsx');

var TestSuiteControls = React.createClass({
	render: function () {
		return (
			<Row className="controls">
				<Col xs={12}>
					<Button style={{marginTop: '20px', marginBottom: '20px', 'fontWeight': 'bold'}} bsStyle="info" block>
						Draft New Test Case
					</Button>
				</Col>
				<Col xs={12}>
					<TestSuiteSelect />
				</Col>
			</Row>
		);
	}
});

module.exports = TestSuiteControls;
