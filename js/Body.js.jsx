var React  = require('react');

module.exports = React.createClass({
  render() {
    return (
      <main style={{
        color: '#666',
        marginTop: '0',
        padding: '20px',
        paddingTop: '70px'
      }}>
        <h3>Mobile Topbar Prototype</h3>

        <p>
          The goal of this prototype is to determine the 'shape' of the mobile
          Topbar. Does this design cover the needs of our current and future
          interfaces apps.
        </p>

        <p>
          <em>(Interactions are all still very crude)</em>
        </p>

        <hr />

        <h3>Org/User Menu (left) </h3>

        <p>
          This menu is concerned with <strong>everything outside of the current
          app context</strong>. When collapsed, it shows the icon of the current
          app.

          <ul>
            <li>App Switcher</li>
            <li>Account Switcher</li>
            <li>Help & Logout</li>
          </ul>
        </p>

        <hr />

        <h3>Route Menu (middle) </h3>

        <p>
          This menu is concerned with the routes of the current application. When
          collapsed, it shows the name (and icon) of the current route.
        </p>

        <hr />

        <h3>App Menu (right) </h3>

        <p>
          This button could serve any number of application-specific needs.
          Examples:

          <ul>
            <li><strong>Resourecs</strong>: Sidebar</li>
            <li><strong>Check-ins</strong>: "Station Mode" button</li>
            <li><strong>Other</strong>: List of context-specific actions</li>
          </ul>
        </p>

        <hr />
      </main>
    );
  }
});
