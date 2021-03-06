var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var store = require('configureStore').configure();

var actions = require('actions');
var LoginApp = require('LoginApp');
var LoginAPI = require('LoginAPI');
var Drawer = require('Drawer');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={LoginApp}></Route>
      <Route path="/dashboard" component={Drawer}></Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
