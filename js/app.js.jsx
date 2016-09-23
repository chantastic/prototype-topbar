var React          = require('react');
var Topbar         = require('./Topbar.js.jsx');
var Body           = require('./Body.js.jsx');
var OrgTopbarMenu  = require('./OrgTopbarMenu.js.jsx');
var NavTopbarMenu  = require('./NavTopbarMenu.js.jsx');
var AppTopbarMenu  = require('./AppTopbarMenu.js.jsx');


module.exports = React.createClass({
  getInitialState() {
    return {
      AppMenuShown: false,
      NavMenuShown: false,
      OrgMenuShown: false
    }
  },

  render() {
    return (
      <div className="container">
        <Topbar />
        <Body />

        <OrgTopbarMenu />
        <NavTopbarMenu />
        <AppTopbarMenu />
      </div>
    );
  }
});
