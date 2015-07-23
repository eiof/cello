'use strict';

var React = require('react');
var SplitLayout = require('../general/split-layout.jsx');
var TestSuiteList = require('./test-suite-list.jsx');
var TestSuiteControls = require('./test-suite-controls.jsx');

var TestSuiteListLayout = React.createClass({
	render: function () {
		var testSuiteList = <TestSuiteList />;
		var testSuiteControls = <TestSuiteControls />;
		return (
			<SplitLayout leftBody={testSuiteList} rightBody={testSuiteControls} />
		);
	}
});

module.exports = TestSuiteListLayout;
