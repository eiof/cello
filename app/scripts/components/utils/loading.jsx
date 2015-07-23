'use strict';

var React = require('react');

var Loading = React.createClass({
  propTypes: {
    display: React.PropTypes.bool.isRequired
  },
  render: function () {
    var display = this.props.display ? 'on' : 'off';
    return (
			<div className={'loading ' + display}>
				<div className="loading-animation"></div>
			</div>
		);
  }
});

module.exports = Loading;
