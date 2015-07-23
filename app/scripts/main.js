'use strict';

var React = require('react');
var Header = require('./components/general/header.jsx');
var TestSuiteListLayout = require('./components/test-suite-list/test-suite-list-layout.jsx');

React.render(<Header />, document.getElementById('header'));
React.render(<TestSuiteListLayout />, document.getElementById('content'));
