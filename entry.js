var React  = require('react');
var App    = React.createFactory(require('./js/App.js.jsx'));
var style  = require('./style.css');

React.initializeTouchEvents(true);
React.render(App(), document.body);
