import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios'
import serverPath from '../paths'
import { withRouter } from 'react-router-dom'
import Question from './Question'
import Timer from './Timer'

class Form extends Component {

  state = {
    user: null,
    form: null,
    activeQuestionIndex: null,
    activeAnswer: {
      text: ""
    },
    alert: null,

  }

  componentWillMount() {
    this.getForm()
  }

  getForm() {
    const { formId } = this.props.match.params
    axios.get(`${serverPath}/forms/${formId}`)
    .then(response => {
      const { form } = response.data

      this.setState({
        form: {
          title: form.name,
          questions: form.Questions
        },
        activeQuestionIndex: 0
      }, this.getUser())
    })
    .catch(error => {
      this.setState({
        ...this.state,
        alert: error.message
      })
    }
  )
}

getUser() {

  const { userId } = this.props.match.params
  axios.get(`${serverPath}/users/${userId}`)
  .then(response => {
    const { user } = response.data
    this.setState({
      ...this.state,
      user
    })
  })
  .catch(error => {
    this.setState({
      ...this.state,
      alert: error.message
    })
  })
}

setActiveAnswer(text) {
  const { user, activeQuestionIndex, activeAnswer } = this.state
  const { id: userId } = user
  const { id: questionId } = this.state.form.questions[activeQuestionIndex]
  this.setState({
    ...this.state,
    activeAnswer: {
      ...activeAnswer,
      text,
      userId,
      questionId
    }
  })
}

postAnswer() {
  const { activeAnswer, activeQuestionIndex, user } = this.state
  const { id: questionId } = this.state.form.questions[activeQuestionIndex]
  const { id: userId } = user

  axios.post(`${serverPath}/questions/${questionId}/users/${userId}/answers`, activeAnswer)
  .then(response => {
    if (response.status === 200) {
      const newIndex = activeQuestionIndex + 1
      this.setState({
        ...this.state,
        activeQuestionIndex: newIndex,
        activeAnswer: {
          ...activeAnswer,
          text: ""
        }
      })
    } else {
      this.setState({
        ...this.state,
        alert: response.message
      })
    }
  })
  .catch(error => {
    this.setState({
      ...this.state,
      alert: error.message
    })
  })
}

renderQuestion() {
  const { activeQuestionIndex, form, user, activeAnswer } = this.state
  if (activeQuestionIndex != null && form && user) {
    const question = form.questions[activeQuestionIndex]
    const { text } = activeAnswer
    const setActiveAnswer = this.setActiveAnswer.bind(this)
    const postAnswer = this.postAnswer.bind(this)
    return (
      <Question
        question={question}
        user={user}
        first={activeQuestionIndex === 0}
        last={activeQuestionIndex === form.questions.length - 1}
        set={setActiveAnswer}
        answerVal={text}
        postAnswer={postAnswer}
        />
    )
  } else {
    return (`Sorry something is wrong`)
  }
}

renderAlert() {
  const { alert } = this.state
  if (alert) {
    return (
      <div className="alert alert-warning" role="alert">
        Whoops! Something went wrong...
        <br/>
        {alert}
      </div>
    )
  }
}

render() {
  const { user } = this.state
  return (

    <div className="wrapper">
      {console.log('USER', user)}
      <nav className="navbar navbar-light bg-light justify-content-end">
        <Timer user={user}/>
      </nav>
      <div className='col-md-6 offset-md-3'>
        { user ? this.renderQuestion() : `Loading` }
      </div>
    </div>
  );
}
}

export default withRouter(Form);
