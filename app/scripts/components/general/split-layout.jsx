'use strict';

var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var SplitLayout = React.createClass({
	propTypes: {
		leftBody: React.PropTypes.node.isRequired,
		rightBody: React.PropTypes.node.isRequired
	},
	render: function () {
		return (
			<Grid fluid className="split-layout-grid">
				<Row className="split-layout-grid">
					<Col xs={10} sm={9} className="split-layout-grid">
						{this.props.leftBody}
					</Col>
					<Col xs={2} sm={3} className="split-layout-grid gray-out">
						{this.props.rightBody}
					</Col>
				</Row>
			</Grid>
		);
	}
});

module.exports = SplitLayout;
