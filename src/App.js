import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'kea'
import test from './test'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2>Are you fucking ready? {this.props.ready}</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// export default App;
export default connect({
  props: [
    test, [
      'ready'
    ]
  ]
})(App)
