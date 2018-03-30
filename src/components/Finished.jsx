import React, { Component } from 'react';

class Finished extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">You've completed the form</h1>
        </header>
        <p className="App-intro">
          Thanks for your contribution
        </p>
        <div className="col-md-6 offset-md-3">

          <button
            onClick={()=> {this.props.history.push('/')}}
            type="button"
            className="btn btn-info">
            Start Over
          </button>
        </div>
      </div>

    );
  }
}

export default Finished;
