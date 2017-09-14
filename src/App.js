import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="Something Different"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}

export default App;
