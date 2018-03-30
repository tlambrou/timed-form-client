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
      console.log('RESPONSE', response)
      if (response.status === 200) {
        this.props.history.push(`/users/${response.data.user.id}/forms/10000/`)
      }
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
  }

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
          <NameInput
            name="name"
            required={true}
            label="Your Name"
            val={this.state.name}
            set={name => this.setState({name})} />
          <button onClick={this.submitName.bind(this)} type="button" className="btn btn-primary">Submit</button>
        </div>
      </div>

    );
  }
}

export default UserCreate;
