var React  = require('react');

module.exports = React.createClass({
  render() {
    return (
      <div className="app-topbar-btn"
           onClick={this.handleClick}>
        <i className="fa fa-lg fa-ellipsis-h" />
      </div>
    );
  },

  handleClick() {
    console.log('App Topbar Button clicked');
    // this.setState({AppMenuShown: !this.state.AppMenuShown});
  }
});
