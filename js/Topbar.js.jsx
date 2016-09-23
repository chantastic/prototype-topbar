var React = require('react');

var OrgTopbarButton  = require('./OrgTopbarButton.js.jsx');
var NavTopbarButton  = require('./NavTopbarButton.js.jsx');
var AppTopbarButton  = require('./AppTopbarButton.js.jsx');

var TopbarStore = require('./stores/TopbarStore.js');

module.exports = React.createClass({
  render() {
    return (
      <div className="topbar">
        <OrgTopbarButton />
        <NavTopbarButton />
        <AppTopbarButton />
      </div>
    );
  },

  // handleAppChange: function () {
  //   this.setState({OrgMenuShown: false});
  // },

  // <AppTopbarMenu shown={this.state.AppMenuShown} />
  // <OrgTopbarMenu shown={this.state.OrgMenuShown} onSelectApp={this.handleAppChange} />
  // <NavTopbarMenu shown={this.state.NavMenuShown} />

});
