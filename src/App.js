import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Go to the "App.css" file and change some of the features in the App-intro section,
          that will change the style of this paragraph.

        </p>
      </div>
    );
  }
}

export default App;
