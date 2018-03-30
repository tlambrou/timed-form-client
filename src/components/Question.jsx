import React, { Component } from 'react';
import { withRouter } from 'react-router'
import QuestionInput from './QuestionInput'

class Question extends Component {

  renderGreeting() {
    const { name } = this.props.user
    if (this.props.first) {
      return (<h4 className="primary-text">Great! How about we get started {name}...</h4>)
    } else {
      return ``
    }
  }

  renderPrevious() {
    if (!this.props.first) {
    }
  }

  renderNext() {
    if (this.props.last) {
      return <button onClick={() => {this.props.history.push('/finished')}} type="button" className="btn btn-success">Finish...</button>
    } else {
      return <button onClick={this.props.postAnswer} type="button" className="btn btn-info">Next Question</button>
    }
  }

  render() {
    const { question, answerVal, set } = this.props

    return (

      <div>
        {this.renderGreeting()}
        <hr />
        <h3><strong>{question.text}</strong></h3>
        <QuestionInput
          label="Answer"
          required={true}
          val={answerVal}
          set={set}
          />
        {this.renderNext()}

      </div>

    );
  }
}

export default withRouter(Question);
