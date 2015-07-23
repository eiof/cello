'use strict';

var React = require('react');
var classNames = require('classnames');

var FontAwesome = React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.string,
    rotate: React.PropTypes.number,
    flip: React.PropTypes.string,
    fixedWidth: React.PropTypes.bool
  },
  render: function () {
    var icon = 'fa-' + this.props.icon;
    var size = this.props.size ? 'fa-' + this.props.size : '';
    var rotate = this.props.rotate ? 'fa-rotate-' + this.props.rotate : '';
    var flip = this.props.flip ? 'fa-flip-' + this.props.flip : '';
    var fixedWidth = this.props.fixedWidth ? 'fa-fw' : '';
    var classes = classNames('fa', icon, size, rotate, flip, fixedWidth);
    return (
      <i className={classes}></i>
    );
  }
});

module.exports = FontAwesome;
