import React, { Component } from 'react';
import NameInput from './NameInput'
import serverPath from '../paths'
import axios from 'axios'

class UserCreate extends Component {

  state = {
    name: ""
  }

  submitName() {
    axios.post(`${serverPath}/users`, this.state)
    .then((response) => {
      if (response.status === 200) {
        this.props.history.push(`/users/${response.data.user.id}/forms/10000/`)
      }
    })
    .catch((error) => {
    })
  }

  render() {
    return (
      <div className="col-md-8 offset-md-2">
        <header className="App-header">
          <h1 className="App-title">Welcome to Timed Form App</h1>
        </header>
        <p className="App-intro">
          Welcome.This is a timed form. You will be given the opportunity to take answer a series of questions within the alotted time.
          To get started, enter your name.
        </p>
        <div className="col-md-6 offset-md-3">
          <NameInput
            name="name"
            required={true}
            label="Your Name"
            val={this.state.name}
            set={name => this.setState({name})} />
          <div className="alert alert-warning" role="alert">
            Once you begin you will have a fixed amount of time to complete all questions
          </div>
          <button
            onClick={this.submitName.bind(this)}
            type="button"
            className="btn btn-lg btn-info">
            Begin
          </button>
        </div>
      </div>

    );
  }
}

export default UserCreate;
