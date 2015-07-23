'use strict';

var React = require('react');
var Button = require('react-bootstrap').Button;
var FontAwesome = require('../utils/font-awesome.jsx');
var DocsWrapper = require('../utils/docs-wrapper.jsx');

var User = require('../../resources/trello/user.js');

var Header = React.createClass({
  getInitialState: function () {
		return {
      userFullName: null
		};
	},
	componentDidMount: function () {
		var user = new User();
    user.fetch({
			success: function (result) {
				if (this.isMounted()) {
					this.setState({userFullName: result.get('fullName') + '\'s'});
				}
			}.bind(this)
		});
	},
  render: function() {
    return (
      <header>
        <div className='header-left'>
          <h1 className='title'>Cello</h1>
        </div>
        <div className='header-right'>
          <span className='logged-in-as'>
            <span className='text-muted'>Using</span>
            &nbsp;{this.state.userFullName}&nbsp;
            <span className='text-muted'>Trello account</span>
          </span>
          <Button className="circular" bsSize='large' bsStyle='info' href='https://trello.com/'>
            <FontAwesome icon='trello' fixedWidth={true} />
          </Button>
          <DocsWrapper>
            <Button className="circular" bsSize='large' bsStyle='info'>
              <FontAwesome icon='question' fixedWidth={true} />
            </Button>
          </DocsWrapper>
        </div>
      </header>
    );
  }
});

module.exports = Header;
