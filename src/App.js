import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://www.google.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Google
          </a>
        </header>
      </div>
    );
  }
}

export default App;
