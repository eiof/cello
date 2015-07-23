'use strict';

var React = require('react');
var SplitLayout = require('../general/split-layout.jsx');
var TestSuiteControls = require('./test-suite-controls.jsx');

var TestCaseLayout = React.createClass({
	render: function () {
		var testSuiteControls = <TestSuiteControls />;
		return (
			<SplitLayout leftBody={<h1>Test Cases!</h1>} rightBody={testSuiteControls} />
		);
	}
});

module.exports = TestCaseLayout;
