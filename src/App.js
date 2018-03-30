import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from './components/Routes'
import createHistory from 'history/createBrowserHistory';
import './App.css';
import UserCreate from './components/UserCreate'

class App extends Component {
  render() {
    const history = createHistory()
    return (
      <Router history={history}>
        <div className="App">
          <Routes />
        </div>
      </Router>

    );
  }
}

export default App;
