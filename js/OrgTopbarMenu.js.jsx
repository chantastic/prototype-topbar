var React  = require('react/addons');

module.exports = React.createClass({
  getClassName() {
    return React.addons.classSet({
      'org-topbar-menu': true,
      'ease-out-quart':  true,
      'is-shown':        this.props.shown
    });
  },

  render() {
    return (
      <div className={this.getClassName()}>
        Org Topbar Menu
      </div>
    );
  }
});
