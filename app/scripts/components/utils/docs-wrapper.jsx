'use strict';

var React = require('react');

var DocsWrapper = React.createClass({
	propTypes: {
		specification: React.PropTypes.string
	},
	getDefaultProps: function () {
		return {
			specification: ''
		};
	},
  render: function () {
    var href = '/docs/#' + this.props.specification;
    return (
			<a href={href}>
				{this.props.children}
			</a>
		);
  }
});

module.exports = DocsWrapper;
