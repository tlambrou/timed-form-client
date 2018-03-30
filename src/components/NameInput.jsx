import React, { Component } from 'react';

class NameInput extends Component {

  setInputText = (e) => {
    e.preventDefault();
    this.props.set(e.target.value)
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
          onChange={this.setInputText} value={this.props.val}/>
          <span className="material-input"></span>
      </div>

    );
  }
}

export default NameInput;
