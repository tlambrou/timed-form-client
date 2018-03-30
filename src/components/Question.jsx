import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios'
import serverPath from '../paths'
import { withRouter } from 'react-router'
import QuestionInput from './QuestionInput'

class Question extends Component {

  renderFirst() {
    const { name } = this.props.user
    if (this.props.first) {
      return (<h4 className="primary-text">Great! How about we get started {name}...</h4>)
    } else {
      return ``
    }
  }

  render() {
    const { user, question } = this.props

    return (

      <div>
        {this.renderFirst()}
        <hr />
        <h3><strong>{question.text}</strong></h3>
        <QuestionInput label="Answer" required={true} val="hi" />

      </div>

    );
  }
}

export default withRouter(Question);
