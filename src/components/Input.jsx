import React, { Component } from 'react';

class Input extends Component {

  state = {
    inputText: ""  }

  setInputText = (e) => {
    e.preventDefault();
    this.setState({
      inputText: e.target.value
    })
  }


  render() {

    return(
      <div className="form-group label-floating is-empty">
        <label className="control-label">
          {this.props.label}
          <small>
            {this.props.required ? "*" : ""}
          </small>
        </label>
          <input className="form-control" name={this.props.name} type={this.props.type}
          required={this.props.required} aria-required={this.props.required}
          onChange={this.setInputText} value={this.state.inputText}/>
          <span className="material-input"></span>
      </div>

    );
  }
}

export default Input;
