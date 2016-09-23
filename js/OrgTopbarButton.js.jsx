var React         = require('react');
var TopbarActions = require('./actions/TopbarActions.js');

module.exports = React.createClass({
  render() {
    return (
      <div className="org-topbar-btn"
           onClick={this.handleClick}>
        <i className="fa fa-lg fa-check-square-o" />
      </div>
    );
  },

  handleClick() {
    TopbarActions.showOrgMenu();
  }
});
