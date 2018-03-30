import React, { Component } from 'react';
import { withRouter } from 'react-router'

class QuestionInput extends Component {

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
          <textarea rows="5" className="form-control" name={this.props.name} type={this.props.type}
          required={this.props.required} aria-required={this.props.required}
          onChange={this.setInputText} value={this.props.val}/>
          <span className="material-input"></span>
      </div>

    );
  }
}

export default withRouter(QuestionInput);
