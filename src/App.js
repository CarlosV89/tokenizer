import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';

import logo from './logo.svg';
import './App.css';
import config from './config';

import Amplify from 'aws-amplify';
console.log(config.auth, 'asdfsdf');
Amplify.configure({
    Auth: config.auth
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withAuthenticator(App);
