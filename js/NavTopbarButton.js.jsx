var React  = require('react');

module.exports = React.createClass({
  render() {
    return (
      <div className="nav-topbar-btn"
           onClick={this.handleClick}>
        Events <i className="fa fa-sort-desc" />
      </div>
    );
  },

  handleClick() {
    console.log('Nav Topbar Button clicked');
    // this.setState({NavMenuShown: !this.state.NavMenuShown});
  }
});
