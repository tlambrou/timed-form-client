import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Timed Form App</h1>
        </header>
        <p className="App-intro">
          To get started, enter your name.
        </p>
        <div className="col-md-6 offset-md-3">
          <Input name="name" required={true} label="Your Name"/>
          <button onClick={}type="button" class="btn btn-primary">Primary</button>
      </div>

      </div>
    );
  }
}

export default App;
