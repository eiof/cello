'use strict';

var React = require('react');
var Router = require('react-router');
var Header = require('../general/header.jsx');
var TestCaseLayout = require('../test-case/test-case-layout.jsx');
var TestSuiteListLayout = require('../test-suite-list/test-suite-list-layout.jsx');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={Main}>
    <Route name="case" handler={TestCaseLayout}/>
    <DefaultRoute handler={TestSuiteListLayout}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
