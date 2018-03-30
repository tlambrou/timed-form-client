import React, { Component } from 'react';
import Input from './Input'

class Form extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to Timed Form App</h1>
        </header>
        <p className="App-intro">
          To get started, enter your name.
        </p>
        <div className="col-md-6 offset-md-3">
          <Input name="name" required={true} label="Your Name"/>
          <button type="button" class="btn btn-primary">Submit</button>
        </div>
      </div>

    );
  }
}

export default Form;
